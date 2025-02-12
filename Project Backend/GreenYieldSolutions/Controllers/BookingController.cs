using GreenYieldSolutions.Data;
using GreenYieldSolutions.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GreenYieldSolutions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly BookingProductsDbContext _context;

        public BookingController(BookingProductsDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateBooking([FromBody] BookingDto bookingDto)
        {
            var customer = await _context.Customers.FirstOrDefaultAsync(c => c.Name == bookingDto.CustomerName);
            if (customer == null)
            {
                customer = new Customer
                {
                    Name = bookingDto.CustomerName,
                    Bookings = new List<Booking>()
                };
                _context.Customers.Add(customer);
                await _context.SaveChangesAsync();
            }

            var booking = new Booking
            {
                BookingDate = DateTime.UtcNow,
                CustomerId = customer.Id,
                TotalPrice = bookingDto.TotalPrice,
                BookingItems = bookingDto.Items.Select(item => new BookingItem
                {
                    ProductId = item.ProductId,
                    Quantity = item.Quantity,
                    Price = item.Price
                }).ToList()
            };

            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            // Return a simplified DTO to avoid circular reference issues
            var responseDto = new
            {
                booking.Id,
                booking.BookingDate,
                booking.TotalPrice,
                CustomerName = customer.Name,
                Items = booking.BookingItems.Select(bi => new
                {
                    bi.ProductId,
                    bi.Quantity,
                    bi.Price
                })
            };

            return Ok(responseDto);
        }


        public class BookingDto
        {
            public string CustomerName { get; set; } // Change from CustomerId to CustomerName
            public decimal TotalPrice { get; set; }
            public List<BookingItemDto> Items { get; set; }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBookings()
        {
            var bookings = await _context.Bookings
                .Include(b => b.Customer)
                .Include(b => b.BookingItems)
                .ThenInclude(bi => bi.Product)
                .ToListAsync();

            var response = bookings.Select(b => new
            {
                b.Id,
                b.BookingDate,
                b.TotalPrice,
                CustomerName = b.Customer.Name,
                Items = b.BookingItems.Select(bi => new
                {
                    ProductId = bi.Product.Id,
                    ProductName = bi.Product.Name,
                    Brand = bi.Product.Brand,
                    Description = bi.Product.Description,
                    ImagePath = bi.Product.ImagePath,  // Ensure this is included
                    Quantity = bi.Quantity,
                    Price = bi.Price
                }).ToList()
            });

            return Ok(response);
        }



        [HttpGet("customer/{customerName}")]
        public async Task<IActionResult> GetBookingsForCustomer(string customerName)
        {
            var bookings = await _context.Bookings
                .Include(b => b.Customer)
                .Include(b => b.BookingItems)
                .ThenInclude(bi => bi.Product)
                .Where(b => b.Customer.Name == customerName)
                .ToListAsync();

            if (!bookings.Any())
            {
                return NotFound("No bookings found for this customer.");
            }

            var response = bookings.Select(b => new
            {
                b.Id,
                b.BookingDate,
                b.TotalPrice,
                CustomerName = b.Customer.Name,
                Items = b.BookingItems.Select(bi => new
                {
                    ProductId = bi.Product.Id,
                    ProductName = bi.Product.Name,
                    Brand = bi.Product.Brand,
                    Description = bi.Product.Description,
                    ImagePath = bi.Product.ImagePath,  
                    Quantity = bi.Quantity,
                    Price = bi.Price
                }).ToList()
            });

            return Ok(response);
        }


    }



    public class BookingItemDto
    {
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}