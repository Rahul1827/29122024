using GreenYieldSolutions.Data;
using GreenYieldSolutions.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GreenYieldSolutions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly AddProductDbContext _context;
        private readonly IWebHostEnvironment _env;

        public ProductsController(AddProductDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

       



        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProduct()
        {
            var products = await _context.Products.ToListAsync();
            var baseUrl = $"{Request.Scheme}://{Request.Host}";

            foreach (var product in products)
            {
                if (!string.IsNullOrEmpty(product.ImagePath) && !product.ImagePath.StartsWith("http"))
                {
                    product.ImagePath = $"{baseUrl}{product.ImagePath}";
                }
            }

            return Ok(products);
        }




        [HttpPost]
        public async Task<IActionResult> AddProduct([FromForm] Product product, IFormFile Image)
        {
            if (Image == null || Image.Length == 0)
            {
                return BadRequest(new { message = "Image is required." });
            }

            var uploadsFolder = Path.Combine(_env.WebRootPath, "uploads");
            Directory.CreateDirectory(uploadsFolder);

            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(Image.FileName);
            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await Image.CopyToAsync(stream);
            }

            product.ImagePath = $"/uploads/{fileName}";

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            var baseUrl = $"{Request.Scheme}://{Request.Host}";
            product.ImagePath = $"{baseUrl}{product.ImagePath}"; // Ensure full URL

            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }


        // PUT: api/products/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, [FromForm] Product product, IFormFile? Image)
        {
            var existingProduct = await _context.Products.FindAsync(id);
            if (existingProduct == null)
            {
                return NotFound();
            }

            existingProduct.Name = product.Name;
            existingProduct.Brand = product.Brand;
            existingProduct.Description = product.Description;
            existingProduct.Price = product.Price;

            if (Image != null && Image.Length > 0)
            {
                var uploadsFolder = Path.Combine(_env.WebRootPath, "uploads");
                Directory.CreateDirectory(uploadsFolder);

                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(Image.FileName);
                var filePath = Path.Combine(uploadsFolder, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await Image.CopyToAsync(stream);
                }

                existingProduct.ImagePath = $"/uploads/{fileName}";
            }

            _context.Entry(existingProduct).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Products.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            var baseUrl = $"{Request.Scheme}://{Request.Host}";
            existingProduct.ImagePath = $"{baseUrl}{existingProduct.ImagePath}"; // Return full URL

            return Ok(existingProduct);
        }

        // DELETE: api/products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}











