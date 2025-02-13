using System.ComponentModel.DataAnnotations;

namespace GreenYieldSolutions.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Mobile { get; set; }

        [Required]
        public string Query { get; set; }

        public DateTime SubmittedAt { get; set; }
    }
}
