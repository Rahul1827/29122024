using Microsoft.EntityFrameworkCore;
using GreenYieldSolutions.Models;

namespace GreenYieldSolutions.Data
{
    public class BookingProductsDbContext : DbContext
    {
        public BookingProductsDbContext(DbContextOptions<BookingProductsDbContext> options)
            : base(options)
        {
        }

        // DbSet for existing table (products)
        public DbSet<Product> Products { get; set; }

        // DbSet for new tables
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<BookingItem> BookingItems { get; set; }
        public DbSet<Customer> Customers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Exclude the existing products table from migrations
            modelBuilder.Entity<Product>().ToTable("products", t => t.ExcludeFromMigrations());

            // Configure relationships for new tables
            modelBuilder.Entity<Booking>()
                .HasOne(b => b.Customer)
                .WithMany(c => c.Bookings)
                .HasForeignKey(b => b.CustomerId);

            modelBuilder.Entity<BookingItem>()
                .HasOne(bi => bi.Booking)
                .WithMany(b => b.BookingItems)
                .HasForeignKey(bi => bi.BookingId);

            modelBuilder.Entity<BookingItem>()
                .HasOne(bi => bi.Product)
                .WithMany()
                .HasForeignKey(bi => bi.ProductId);
        }
    }
}