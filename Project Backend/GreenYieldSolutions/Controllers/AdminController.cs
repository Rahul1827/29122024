using GreenYieldSolutions.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GreenYieldSolutions.Controllers
{
    [Route("api/admin")]
    [ApiController]
    public class AdminController : Controller
    {
       
            private readonly ApplicationDbContext _context;

            public AdminController(ApplicationDbContext context)
            {
                _context = context;
            }

            // 🔹 Login API
            [HttpPost("login")]
            public async Task<IActionResult> Login([FromBody] LoginDto model)
            {
                var admin = await _context.Admins.FirstOrDefaultAsync(a => a.Email == model.Email);
                if (admin == null || !BCrypt.Net.BCrypt.Verify(model.Password, admin.PasswordHash))
                {
                    return Unauthorized("Invalid credentials");
                }

                return Ok("Login successful");
            }

            // 🔹 Forgot Password API
            [HttpPost("forgot-password")]
            public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordDtoAdmin model)
            {
                var admin = await _context.Admins.FirstOrDefaultAsync(a => a.Email == model.Email);
                if (admin == null) return BadRequest("Admin not found");

                var newPassword = Guid.NewGuid().ToString("N").Substring(0, 8); // Generate random password
                admin.PasswordHash = BCrypt.Net.BCrypt.HashPassword(newPassword);
                await _context.SaveChangesAsync();

                return Ok($"Your new password: {newPassword}");
            }


        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDtoAdmin model)
        {
            var admin = await _context.Admins.FirstOrDefaultAsync(a => a.Email == model.Email);
            if (admin == null) return BadRequest("Admin not found");

            // Verify old password
            if (!BCrypt.Net.BCrypt.Verify(model.OldPassword, admin.PasswordHash))
            {
                return BadRequest("Incorrect old password");
            }

            // Hash and update new password
            admin.PasswordHash = BCrypt.Net.BCrypt.HashPassword(model.NewPassword);
            await _context.SaveChangesAsync();

            return Ok("Password successfully updated");
        }

       


    }

        // DTOs (Data Transfer Objects)
        public class LoginDto
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class ForgotPasswordDtoAdmin
        {
            public string Email { get; set; }
        }

    // DTO (Data Transfer Object) for Reset Password
    public class ResetPasswordDtoAdmin
    {
        public string Email { get; set; }
        public string OldPassword { get; set; }  // The temporary password user received
        public string NewPassword { get; set; }
    }

}






