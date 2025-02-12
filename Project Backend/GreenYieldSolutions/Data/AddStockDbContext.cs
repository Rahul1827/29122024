using GreenYieldSolutions.Models;
using Microsoft.EntityFrameworkCore;

namespace GreenYieldSolutions.Data
{
    
    public class AddStockDbContext : DbContext
    {
        public AddStockDbContext(DbContextOptions<AddStockDbContext> options) : base(options) { }

        public DbSet<StockInventory> StockInventories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StockInventory>().ToTable("StockInventories");
        }
    }
}
