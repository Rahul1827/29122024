using GreenYieldSolutions.Data;
using GreenYieldSolutions.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace GreenYieldSolutions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserDbContext _context;

        public UsersController(UserDbContext context)
        {
            _context = context;
        }

        // 🔹 Register API
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Check if the email is already registered
            if (await _context.Users.AnyAsync(u => u.Email == user.Email))
            {
                return BadRequest("Email already registered.");
            }

            // Save the user with plain text password
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("User registered successfully!");
        }

        // 🔹 Login API
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == loginData.Email && u.Password == loginData.Password);

            if (user == null)
            {
                return Unauthorized("Invalid email or password.");
            }

            return Ok(new { Message = "Login successful", UserName = user.Name });
        }

        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordDtoFarmer model)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
            if (user == null)
                return BadRequest("User not found");

            // Generate a random password
            string tempPassword = GenerateRandomPassword(8);

            // Store new password in plain text (NO HASHING)
            user.Password = tempPassword;
            await _context.SaveChangesAsync();

            return Ok(new { message = "Temporary password generated", tempPassword });
        }

        //  function to generate a random password
        private string GenerateRandomPassword(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[new Random().Next(s.Length)]).ToArray());
        }



        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDtoFarmer model)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
            if (user == null) return BadRequest("User not found");

            // Check if the old password matches
            if (user.Password != model.OldPassword)
            {
                return BadRequest("Incorrect temporary password");
            }

            // Update password (No Hashing)
            user.Password = model.NewPassword;
            await _context.SaveChangesAsync();

            return Ok("Password successfully updated.");
        }

        [HttpGet("getUserByEmail")]
        public async Task<IActionResult> GetUserByEmail([FromQuery] string email)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (user == null)
            {
                return NotFound(new { message = "User not found" });
            }
            return Ok(new { name = user.Name }); // Send only the name
        }






    }

    // DTOs (Data Transfer Objects)
    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class ForgotPasswordDtoFarmer
    {
        public string Email { get; set; }
    }

    public class ResetPasswordDtoFarmer
    {
        public string Email { get; set; }
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
    }
}
