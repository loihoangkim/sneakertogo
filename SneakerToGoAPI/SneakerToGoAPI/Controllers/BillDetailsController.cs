﻿using System;
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
    public class BillDetailsController : ControllerBase
    {
        private readonly SneakerToGoContext _context;

        
        public BillDetailsController(SneakerToGoContext context)
        {
            _context = context;
        }

        // GET: api/BillDetails

        [HttpGet]
        public  ActionResult<BillDetail> GetBillDetails(int id)
        {
          if (_context.BillDetails == null)
          {
              return NotFound();
          }
          var result =  _context.BillDetails.Where( x => x.BillId == id);
           return Ok(result);
        }

        [HttpGet]
        [Route("findByBillID")]
        public async Task<ActionResult<IEnumerable<BillDetail>>> GetBillDetailsByUserID(int billID)
        {
            if (_context.BillDetails == null)
            {
                return NotFound();
            }
            return await _context.BillDetails.Where(c => c.BillId == billID).ToListAsync();
        }

        

        // GET: api/BillDetails/5
        [HttpGet("{id}")]
        public ActionResult<BillDetail> GetBillDetail(int id)
        {
          if (_context.BillDetails == null)
          {
              return NotFound();
          }
            var billDetail =  _context.BillDetails.FirstOrDefault(x => x.BillId == id);

            if (billDetail == null)
            {
                return NotFound();
            }

            return billDetail;
        }

        // PUT: api/BillDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBillDetail(int id, BillDetail billDetail)
        {
            if (id != billDetail.BillId)
            {
                return BadRequest();
            }

            _context.Entry(billDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BillDetailExists(id))
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



        // POST: api/BillDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BillDetail>> PostBillDetail(BillDetail billDetail)
        {
          if (_context.BillDetails == null)
          {
              return Problem("Entity set 'SneakerToGoContext.BillDetails'  is null.");
          }
            _context.BillDetails.Add(billDetail);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BillDetailExists(billDetail.BillId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBillDetail", new { id = billDetail.BillId }, billDetail);
        }

        // DELETE: api/BillDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBillDetail(int id)
        {
            if (_context.BillDetails == null)
            {
                return NotFound();
            }
            var billDetail = await _context.BillDetails.FindAsync(id);
            if (billDetail == null)
            {
                return NotFound();
            }

            _context.BillDetails.Remove(billDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BillDetailExists(int id)
        {
            return (_context.BillDetails?.Any(e => e.BillId == id)).GetValueOrDefault();
        }
    }
}
