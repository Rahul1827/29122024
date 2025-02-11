using GreenYieldSolutions.Models;
using Microsoft.EntityFrameworkCore;

namespace GreenYieldSolutions.Data
{
    public class BookFieldVisitDbContext : DbContext
    {
        public BookFieldVisitDbContext(DbContextOptions<BookFieldVisitDbContext> options) : base(options) { }

        public DbSet<FieldVisitRequest> FieldVisitRequests { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FieldVisitRequest>()
                .Property(f => f.FarmerEmail)
                .IsRequired(); // Ensure it's required
        }
    }
}



