using GreenYieldSolutions.Data;
using GreenYieldSolutions.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GreenYieldSolutions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockInventoryController : ControllerBase
    {
        private readonly AddStockDbContext _context;

        public StockInventoryController(AddStockDbContext context)
        {
            _context = context;
        }

        // GET: api/StockInventory
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StockInventory>>> GetStockInventories()
        {
            return await _context.StockInventories.ToListAsync();
        }

        // GET: api/StockInventory/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StockInventory>> GetStockInventory(int id)
        {
            var stock = await _context.StockInventories.FindAsync(id);
            if (stock == null) return NotFound();
            return stock;
        }


       [HttpPost]
public async Task<ActionResult<StockInventory>> AddStockInventory(StockInventory stockInventory)
{
    if (stockInventory.Category == null || stockInventory.Category.Trim() == "")
    {
        return BadRequest("Category is required.");
    }

    _context.StockInventories.Add(stockInventory);
    await _context.SaveChangesAsync();
    return CreatedAtAction(nameof(GetStockInventory), new { id = stockInventory.Id }, stockInventory);
}


        // PUT: api/StockInventory/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStockInventory(int id, StockInventory stockInventory)
        {
            if (id != stockInventory.Id) return BadRequest();

            _context.Entry(stockInventory).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/StockInventory/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStockInventory(int id)
        {
            var stock = await _context.StockInventories.FindAsync(id);
            if (stock == null) return NotFound();

            _context.StockInventories.Remove(stock);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
