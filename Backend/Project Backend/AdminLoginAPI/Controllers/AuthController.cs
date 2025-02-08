using AdminLoginAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace AdminLoginAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private static readonly List<LoginModel> Admins = new List<LoginModel>
        {
            new LoginModel { Email = "admin@gmail.com", Password = "password" } // Sample admin login credentials
        };

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            if (loginModel == null)
            {
                return BadRequest("Invalid request.");
            }

            var admin = Admins.Find(a => a.Email == loginModel.Email && a.Password == loginModel.Password);
            if (admin == null)
            {
                return Unauthorized("Invalid credentials.");
            }

            return Ok("Login successful.");
        }
    }
}
