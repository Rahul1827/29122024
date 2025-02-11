namespace GreenYieldSolutions.Data
{
    using Microsoft.EntityFrameworkCore;
    using BCrypt.Net;
    using GreenYieldSolutions.Models;

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Admin> Admins { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed an admin user
            modelBuilder.Entity<Admin>().HasData(new Admin
            {
                Id = 1,
                Email = "rahul.patil.sbg@gmail.com",
                PasswordHash = BCrypt.HashPassword("password") // Hashed "password"
            });
        }
    }

}
