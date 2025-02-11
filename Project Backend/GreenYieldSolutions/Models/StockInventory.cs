using System.ComponentModel.DataAnnotations;

namespace GreenYieldSolutions.Models
{
    public class StockInventory
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string ProductName { get; set; }

        public string BrandName { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        public string Category { get; set; }

        public decimal DealerPrice { get; set; }

        public string DealerName { get; set; }

    }
}
