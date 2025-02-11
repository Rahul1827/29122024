using AdminLoginAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AdminLoginAPI.Data
{
    using Microsoft.EntityFrameworkCore;

    namespace AdminLoginAPI.Data
    {
        public class AppDbContext : DbContext
        {
            public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
            {
            }

            // Keyless entity
            public DbSet<LoginModel> LoginModels { get; set; }

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                base.OnModelCreating(modelBuilder);

                // Mark the entity as keyless
                modelBuilder.Entity<LoginModel>()
                            .HasNoKey(); // Keyless entity
            }
        }
    }

}
