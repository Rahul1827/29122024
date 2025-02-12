using GreenYieldSolutions.Data;
using GreenYieldSolutions.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenYieldSolutions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CropAdvisoryController : ControllerBase
    {
        private readonly CropAdvisoryDbContext _context;

        public CropAdvisoryController(CropAdvisoryDbContext context)
        {
            _context = context;
        }

        // GET: api/CropAdvisory
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CropAdvisory>>> GetCropAdvisories()
        {
            return await _context.CropAdvisories.ToListAsync();
        }

        // GET: api/CropAdvisory/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CropAdvisory>> GetCropAdvisory(int id)
        {
            var cropAdvisory = await _context.CropAdvisories.FindAsync(id);

            if (cropAdvisory == null)
            {
                return NotFound();
            }

            return cropAdvisory;
        }

        // GET: api/CropAdvisory/ByName?cropName=Wheat
        [HttpGet("ByName")]
        public async Task<ActionResult<IEnumerable<CropAdvisory>>> GetCropAdvisoryByName(string cropName)
        {
            var cropAdvisories = await _context.CropAdvisories
                .Where(c => c.CropName == cropName)
                .ToListAsync();

            if (cropAdvisories == null || !cropAdvisories.Any())
            {
                return NotFound();
            }

            return cropAdvisories;
        }

        // POST: api/CropAdvisory
        [HttpPost]
        public async Task<ActionResult<CropAdvisory>> PostCropAdvisory(CropAdvisory cropAdvisory)
        {
            _context.CropAdvisories.Add(cropAdvisory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCropAdvisory", new { id = cropAdvisory.Id }, cropAdvisory);
        }

        // PUT: api/CropAdvisory/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCropAdvisory(int id, CropAdvisory cropAdvisory)
        {
            if (id != cropAdvisory.Id)
            {
                return BadRequest();
            }

            _context.Entry(cropAdvisory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CropAdvisoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/CropAdvisory/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCropAdvisory(int id)
        {
            var cropAdvisory = await _context.CropAdvisories.FindAsync(id);
            if (cropAdvisory == null)
            {
                return NotFound();
            }

            _context.CropAdvisories.Remove(cropAdvisory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CropAdvisoryExists(int id)
        {
            return _context.CropAdvisories.Any(e => e.Id == id);
        }
    }
}
