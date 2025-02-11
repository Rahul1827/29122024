//using GreenYieldSolutions.Data;
//using GreenYieldSolutions.Models;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;

//namespace GreenYieldSolutions.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class FieldVisitRequestsController : ControllerBase
//    {
//        private readonly BookFieldVisitDbContext _context;

//        public FieldVisitRequestsController(BookFieldVisitDbContext context)
//        {
//            _context = context;
//        }



//        [HttpPost]
//        public async Task<IActionResult> CreateFieldVisitRequest([FromBody] FieldVisitRequest request)
//        {
//            if (request == null || string.IsNullOrWhiteSpace(request.FarmerEmail))
//            {
//                return BadRequest(new { success = false, message = "Farmer email is required." });
//            }

//            _context.FieldVisitRequests.Add(request);
//            await _context.SaveChangesAsync();

//            return Ok(new { success = true, message = "Request saved successfully!" });
//        }


//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<FieldVisitRequest>>> GetRequests([FromQuery] string email)
//        {
//            if (string.IsNullOrWhiteSpace(email))
//            {
//                return BadRequest(new { success = false, message = "Email is required." });
//            }

//            // Filter requests based on the provided email
//            var requests = await _context.FieldVisitRequests
//                                          .Where(r => r.FarmerEmail == email)
//                                          .ToListAsync();

//            if (!requests.Any())
//            {
//                return Ok(new { success = false, message = "No requests found." });
//            }

//            return Ok(requests); // Only returns requests from the specific user
//        }



//    }
//}




//Below code is working fine  =================================================================================================================


//using GreenYieldSolutions.Data;
//using GreenYieldSolutions.Models;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using System.Linq;
//using System.Threading.Tasks;

//namespace GreenYieldSolutions.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class FieldVisitRequestsController : ControllerBase
//    {
//        private readonly BookFieldVisitDbContext _context;

//        public FieldVisitRequestsController(BookFieldVisitDbContext context)
//        {
//            _context = context;
//        }

//        [HttpPost]
//        public async Task<IActionResult> CreateFieldVisitRequest([FromBody] FieldVisitRequest request)
//        {
//            if (request == null || string.IsNullOrWhiteSpace(request.FarmerEmail))
//            {
//                return BadRequest(new { success = false, message = "Farmer email is required." });
//            }

//            _context.FieldVisitRequests.Add(request);
//            await _context.SaveChangesAsync();

//            return Ok(new { success = true, message = "Request saved successfully!" });
//        }

//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<FieldVisitRequest>>> GetRequests([FromQuery] string email)
//        {
//            if (string.IsNullOrWhiteSpace(email))
//            {
//                return BadRequest(new { success = false, message = "Email is required." });
//            }

//            var requests = await _context.FieldVisitRequests
//                                          .Where(r => r.FarmerEmail == email)
//                                          .OrderByDescending(r => r.Timestamp) // Sort by timestamp in descending order
//                                          .ToListAsync();

//            if (!requests.Any())
//            {
//                return Ok(new { success = false, message = "No requests found." });
//            }

//            return Ok(requests);
//        }

//        [HttpGet("all")]
//        public async Task<ActionResult<IEnumerable<FieldVisitRequest>>> GetAllRequests()
//        {
//            var requests = await _context.FieldVisitRequests
//                                          .OrderByDescending(r => r.Timestamp) // Sort by timestamp in descending order
//                                          .ToListAsync();
//            return Ok(requests);
//        }

//        [HttpPut("{id}")]
//        public async Task<IActionResult> UpdateRequest(int id, [FromBody] FieldVisitRequest request)
//        {
//            if (id != request.Id)
//            {
//                return BadRequest(new { success = false, message = "Request ID mismatch." });
//            }

//            _context.Entry(request).State = EntityState.Modified;
//            await _context.SaveChangesAsync();

//            return Ok(new { success = true, message = "Request updated successfully!" });
//        }

//        [HttpDelete("{id}")]
//        public async Task<IActionResult> DeleteRequest(int id)
//        {
//            var request = await _context.FieldVisitRequests.FindAsync(id);
//            if (request == null)
//            {
//                return NotFound(new { success = false, message = "Request not found." });
//            }

//            _context.FieldVisitRequests.Remove(request);
//            await _context.SaveChangesAsync();

//            return Ok(new { success = true, message = "Request deleted successfully!" });
//        }
//    }
//}



//===============================================Trial code ======================================================


using GreenYieldSolutions.Data;
using GreenYieldSolutions.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace GreenYieldSolutions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FieldVisitRequestsController : ControllerBase
    {
        private readonly BookFieldVisitDbContext _context;

        public FieldVisitRequestsController(BookFieldVisitDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateFieldVisitRequest([FromBody] FieldVisitRequest request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.FarmerEmail))
            {
                return BadRequest(new { success = false, message = "Farmer email is required." });
            }

            _context.FieldVisitRequests.Add(request);
            await _context.SaveChangesAsync();

            return Ok(new { success = true, message = "Request saved successfully!" });
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<FieldVisitRequest>>> GetRequests([FromQuery] string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return BadRequest(new { success = false, message = "Email is required." });
            }

            var requests = await _context.FieldVisitRequests
                                          .Where(r => r.FarmerEmail == email)
                                          .OrderByDescending(r => r.Timestamp)
                                          .ToListAsync();

            if (!requests.Any())
            {
                return Ok(new { success = false, message = "No requests found." });
            }

            return Ok(requests);
        }

        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<FieldVisitRequest>>> GetAllRequests()
        {
            var requests = await _context.FieldVisitRequests
                                          .OrderByDescending(r => r.Timestamp)
                                          .ToListAsync();
            return Ok(requests);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRequest(int id, [FromBody] FieldVisitRequest request)
        {
            if (id != request.Id)
            {
                return BadRequest(new { success = false, message = "Request ID mismatch." });
            }

            _context.Entry(request).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(new { success = true, message = "Request updated successfully!" });
        }

        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteRequest(int id)
        //{
        //    var request = await _context.FieldVisitRequests.FindAsync(id);
        //    if (request == null)
        //    {
        //        return NotFound(new { success = false, message = "Request not found." });
        //    }

        //    request.Status = "Completed"; // Update status to "Completed"
        //    _context.Entry(request).State = EntityState.Modified;
        //    await _context.SaveChangesAsync();

        //    return Ok(new { success = true, message = "Request marked as completed successfully!" });
        //}  

        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteRequest(int id)
        //{
        //    var request = await _context.FieldVisitRequests.FindAsync(id);
        //    if (request == null)
        //    {
        //        return NotFound(new { success = false, message = "Request not found." });
        //    }

        //    if (request.Status == "Accepted")
        //    {
        //        request.Status = "Completed"; // Mark as "Completed" if previously accepted
        //    }
        //    else if (request.Status == "Rejected")
        //    {
        //        request.Status = "Rejected"; // Keep as "Rejected" if previously rejected
        //    }

        //    _context.Entry(request).State = EntityState.Modified;
        //    await _context.SaveChangesAsync();

        //    return Ok(new { success = true, message = "Request updated successfully!" });
        //}

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRequest(int id)
        {
            var request = await _context.FieldVisitRequests.FindAsync(id);
            if (request == null)
            {
                return NotFound(new { success = false, message = "Request not found." });
            }

            // Update status based on the current status
            if (request.Status == "Accepted")
            {
                request.Status = "Completed"; // Mark as "Completed" if previously accepted
            }
            else if (request.Status == "Rejected")
            {
                request.Status = "Rejected"; // Keep as "Rejected" if previously rejected
            }
            else
            {
                request.Status = "Completed"; // Default to "Completed" for other cases (e.g., Pending)
            }

            _context.Entry(request).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(new { success = true, message = "Request updated successfully!" });
        }
    }
}