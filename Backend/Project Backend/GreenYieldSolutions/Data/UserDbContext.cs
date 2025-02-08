    using Microsoft.EntityFrameworkCore;

    namespace GreenYieldSolutions.Data
    {
   
            public class UserDbContext : DbContext
            {
                public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
                {
                }

                public DbSet<Models.User> Users { get; set; }
            }
    
    }
