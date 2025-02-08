using GreenYieldSolutions.Models;
using Microsoft.EntityFrameworkCore;

namespace GreenYieldSolutions.Data
{
    public class AddProductDbContext : DbContext
    {
        public AddProductDbContext(DbContextOptions<AddProductDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}
