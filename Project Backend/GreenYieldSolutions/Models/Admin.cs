using System.ComponentModel.DataAnnotations;

namespace GreenYieldSolutions.Models
{
    public class Admin
    {
        public int Id { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }
    }
}
