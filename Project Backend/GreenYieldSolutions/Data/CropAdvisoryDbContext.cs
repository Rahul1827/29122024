using GreenYieldSolutions.Models;
using Microsoft.EntityFrameworkCore;

namespace GreenYieldSolutions.Data
{
    public class CropAdvisoryDbContext :DbContext
    {
        public CropAdvisoryDbContext(DbContextOptions<CropAdvisoryDbContext> options)
        : base(options)
        {
        }
        public DbSet<CropAdvisory> CropAdvisories { get; set; }
    }
}


