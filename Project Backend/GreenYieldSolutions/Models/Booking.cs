namespace GreenYieldSolutions.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public DateTime BookingDate { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public List<BookingItem> BookingItems { get; set; }
        public decimal TotalPrice { get; set; }
    }
}
