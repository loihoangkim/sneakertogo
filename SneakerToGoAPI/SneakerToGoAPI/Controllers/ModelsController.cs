using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ModelsController : ControllerBase
    {
        private readonly SneakerToGoContext _context;

        public static int PAGE_SIZE { get; set; } = 9;

        public ModelsController(SneakerToGoContext context)
        {
            _context = context;
        }

        // GET: api/Models
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Model>>> GetModels([FromQuery] string? search, [FromQuery] string? sortBy, [FromQuery] int page = 1)
        {
            var allModels = _context.Models.AsQueryable();

            #region Filtering
            if (!string.IsNullOrEmpty(search))
            {
                allModels = allModels.Where(hh => hh.Name.Contains(search));
            }
            //if (from.HasValue)
            //{
            //    allModels = allModels.Where(hh => hh.DonGia >= from);
            //}
            //if (to.HasValue)
            //{
            //    allModels = allModels.Where(hh => hh.DonGia <= to);
            //}
            #endregion

            #region Sorting

            allModels = allModels.OrderBy(hh => hh.Name);
            if (!string.IsNullOrEmpty(sortBy))
            {
                switch (sortBy)
                {
                    case "tenhh_desc": allModels = allModels.OrderByDescending(hh => hh.Name); break;
                    case "ngay_asc": allModels = allModels.OrderBy(hh => hh.CreateAt); break;
                    case "ngay_desc": allModels = allModels.OrderByDescending(hh => hh.CreateAt); break;
                }
            }
            #endregion

            allModels = allModels.Skip((page - 1) * PAGE_SIZE).Take(PAGE_SIZE);

            if (allModels == null)
            {
                return NotFound();
            }
            else
            {

                try
                {
                    return await allModels.ToListAsync();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                    throw;
                }
            }
            
        }

        // GET: api/Models/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Model>> GetModel(int id)
        {
          if (_context.Models == null)
          {
              return NotFound();
          }
            var model = await _context.Models.FindAsync(id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        // PUT: api/Models/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModel(int id, Model model)
        {
            if (id != model.ModelId)
            {
                return BadRequest();
            }

            _context.Entry(model).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModelExists(id))
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

        // POST: api/Models
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Model>> PostModel(Model model)
        {
          if (_context.Models == null)
          {
              return Problem("Entity set 'SneakerToGoContext.Models'  is null.");
          }
            _context.Models.Add(model);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ModelExists(model.ModelId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetModel", new { id = model.ModelId }, model);
        }

        // DELETE: api/Models/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModel(int id)
        {
            if (_context.Models == null)
            {
                return NotFound();
            }
            var model = await _context.Models.FindAsync(id);
            if (model == null)
            {
                return NotFound();
            }

            _context.Models.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ModelExists(int id)
        {
            return (_context.Models?.Any(e => e.ModelId == id)).GetValueOrDefault();
        }


        [HttpGet]
        [Route("new-code")]
        public int getNewCode()
        {
            int maxCode;
            if (_context.Models == null)
            {
                return 0;
            }
            else
            {
                try
                {
                    maxCode = _context.Models.Max(x => x.ModelId);
                    maxCode++;
                    return maxCode;
                }
                catch (Exception)
                {

                    throw;
                }

            }
        }

        [HttpGet]
        [Route("all")]
        public async Task<ActionResult<IEnumerable<Model>>> getAllModels()
        {
            if (_context.Models == null)
          {
              return NotFound();
          }
            try
            {
                return await _context.Models.ToListAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                throw;
            }
        }

        [HttpGet]
        [Route("best")]
        public async Task<ActionResult<IEnumerable<Model>>> getBestModels()
        {
            if (_context.Models == null)
            {
                return NotFound();
            }
            try
            {
                return await _context.Models.OrderByDescending(x => x.totalSales).Take(10).ToListAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                throw;
            }
        }

        [HttpGet]
        [Route("low")]
        public async Task<ActionResult<IEnumerable<Model>>> getLowModels()
        {
            if (_context.Models == null)
            {
                return NotFound();
            }
            try
            {
                return await _context.Models.OrderBy(x => x.totalQuantity).Take(10).ToListAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                throw;
            }
        }
    }
}
