using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RevenuesController : ControllerBase
    {
        private readonly SneakerToGoContext _context;

        public RevenuesController(SneakerToGoContext context)
        {
            _context = context;
        }

        // GET: api/Revenues
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Revenue>>> GetRevenues()
        {
          if (_context.Revenues == null)
          {
              return NotFound();
          }
            return await _context.Revenues.ToListAsync();
        }

        [HttpGet]
        [Route("get-by-date")]
        public async Task<ActionResult<IEnumerable<Revenue>>> GetRevenuesByMonth(int date,int month, int year)
        {
            if (_context.Revenues == null)
            {
                return NotFound();
            }
            return await _context.Revenues.Where(r =>r.date.Day == date && r.date.Month == month && r.date.Year == year).ToListAsync();
        }

        [HttpGet]
        [Route("get-by-month")]
        public async Task<ActionResult<IEnumerable<Revenue>>> GetRevenuesByMonth(int month,int year)
        {
            if (_context.Revenues == null)
            {
                return NotFound();
            }
            return await _context.Revenues.Where(r => r.date.Month == month && r.date.Year == year).ToListAsync();
        }

        [HttpGet]
        [Route("get-by-year")]
        public async Task<ActionResult<IEnumerable<Revenue>>> GetRevenuesByYear(int month, int year)
        {
            if (_context.Revenues == null)
            {
                return NotFound();
            }
            return await _context.Revenues.Where(r => r.date.Year == year).ToListAsync();
        }

        [HttpPost]
        [Route("update-today")]
        public async Task<ActionResult<IEnumerable<Revenue>>> UpdateRevenues( int idProduct, int number )
        {
            if (_context.Revenues == null)
            {
                return NotFound();
            }
            try
            {
                var product = await _context.Products.FindAsync(idProduct);
                if (product == null)
                {
                    return NotFound();
                }
                DateTime today = DateTime.Now;
                var revenueOfToday = _context.Revenues.FirstOrDefault(r => r.date.Date == today.Date
                                                                          && r.date.Month == today.Month
                                                                          && r.date.Year == today.Year);
                revenueOfToday.totalOrder += number;
                revenueOfToday.totalRevenueOfDay += (product.Price - product.ImportPrice) * number;
                revenueOfToday.totalSalesOfDay += product.Price * number;

                var model = _context.Models.FirstOrDefault(m => m.ModelId == product.ModelId);
                model.totalRevenue += (product.Price - product.ImportPrice) * number;
                model.totalSales += product.Price * number;
                model.totalOrder+= number;
                _context.SaveChanges();
                return Ok();

            }
            catch (Exception)
            {

                throw;
            }
        }


        // GET: api/Revenues/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Revenue>> GetRevenue(int id)
        {
          if (_context.Revenues == null)
          {
              return NotFound();
          }
            var revenue = await _context.Revenues.FindAsync(id);

            if (revenue == null)
            {
                return NotFound();
            }

            return revenue;
        }

        // PUT: api/Revenues/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRevenue(int id, Revenue revenue)
        {
            if (id != revenue.Id)
            {
                return BadRequest();
            }

            _context.Entry(revenue).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RevenueExists(id))
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

        

        private bool RevenueExists(int id)
        {
            return (_context.Revenues?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
