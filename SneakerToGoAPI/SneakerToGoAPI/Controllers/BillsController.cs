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
    [Route("api/v1/[controller]")]
    [ApiController]
    public class BillsController : ControllerBase
    {
        private readonly SneakerToGoContext _context;

        public BillsController(SneakerToGoContext context)
        {
            _context = context;
        }

        // GET: api/Bills
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bill>>> GetBills()
        {
          if (_context.Bills == null)
          {
              return NotFound();
          }
            return await _context.Bills.ToListAsync();
        }

        // GET: api/Bills/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bill>> GetBill(int id)
        {
          if (_context.Bills == null)
          {
              return NotFound();
          }
            var bill = await _context.Bills.FindAsync(id);

            if (bill == null)
            {
                return NotFound();
            }

            return bill;
        }

        // PUT: api/Bills/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBill(int id, Bill bill)
        {
            if (id != bill.BillId)
            {
                return BadRequest();
            }

            _context.Entry(bill).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BillExists(id))
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

        // POST: api/Bills
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Bill>> PostBill(Bill bill)
        {
          if (_context.Bills == null)
          {
              return Problem("Entity set 'SneakerToGoContext.Bills'  is null.");
          }
            _context.Bills.Add(bill);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BillExists(bill.BillId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBill", new { id = bill.BillId }, bill);
        }

        // DELETE: api/Bills/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBill(int id)
        {
            if (_context.Bills == null)
            {
                return NotFound();
            }
            var bill = await _context.Bills.FindAsync(id);
            if (bill == null)
            {
                return NotFound();
            }

            _context.Bills.Remove(bill);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet]
        [Route("findByUserID")]
        public async Task<ActionResult<IEnumerable<Bill>>> GetBillsByUserID(int userID)
        {
            if (_context.Bills == null)
            {
                return NotFound();
            }
            return await _context.Bills.Where(b => b.AccountId == userID).ToListAsync();
        }

        [HttpGet]
        [Route("findByStatus")]
        public async Task<ActionResult<IEnumerable<Bill>>> GetBillsByStatus(string status)
        {
            if (_context.Bills == null)
            {
                return NotFound();
            }
            return await _context.Bills.Where(b => b.OrderStatus.Equals(status)).ToListAsync();
        }

        private bool BillExists(int id)
        {
            return (_context.Bills?.Any(e => e.BillId == id)).GetValueOrDefault();
        }

        [HttpGet]
        [Route("new-code")]
        public int getNewCode()
        {
            int maxCode;
            if (_context.Bills == null)
            {
                return 1;
            }
            else
            {
                try
                {
                    maxCode = _context.Bills.Max(x => x.BillId);
                    maxCode++;
                    return maxCode;
                }
                catch (Exception)
                {

                    throw;
                }

            }
        }

        [HttpPut]
        [Route("updateStatus")]
        public ActionResult updateStatus(int billId, string newStatus)
        {
            if (_context.Bills == null)
            {
                return NotFound();
            }
            else
            {
                var bill = _context.Bills.FirstOrDefault(x => x.BillId == billId);
                bill.OrderStatus = newStatus;
                _context.SaveChanges();
                return Ok();
            }
        }
    }
}
