using GreenYieldSolutions.Models;
using Microsoft.EntityFrameworkCore;

namespace GreenYieldSolutions.Data
{
    public class ContactDbContext : DbContext
    {
        public ContactDbContext(DbContextOptions<ContactDbContext> options) : base(options) { }

        public DbSet<Contact> Contacts { get; set; }
    }
}



