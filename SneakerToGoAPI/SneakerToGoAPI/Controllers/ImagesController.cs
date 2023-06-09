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
    public class ImagesController : ControllerBase
    {
        private readonly SneakerToGoContext _context;

        public ImagesController(SneakerToGoContext context)
        {
            _context = context;
        }

        // GET: api/Images
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Image>>> GetImages()
        {
          if (_context.Images == null)
          {
              return NotFound();
          }
            return await _context.Images.ToListAsync();
        }

        // GET: api/Images/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Image>> GetImage(int id)
        {
          if (_context.Images == null)
          {
              return NotFound();
          }
            var image = await _context.Images.FindAsync(id);

            if (image == null)
            {
                return NotFound();
            }

            return image;
        }

        // PUT: api/Images/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutImage(int id, Image image)
        {
            if (id != image.ImageId)
            {
                return BadRequest();
            }

            _context.Entry(image).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImageExists(id))
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

        // POST: api/Images
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Image>> PostImage(Image image)
        {
          if (_context.Images == null)
          {
              return Problem("Entity set 'SneakerToGoContext.Images'  is null.");
          }
            _context.Images.Add(image);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ImageExists(image.ImageId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetImage", new { id = image.ImageId }, image);
        }

        // DELETE: api/Images/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteImage(int id)
        {
            if (_context.Images == null)
            {
                return NotFound();
            }
            var image = await _context.Images.FindAsync(id);
            if (image == null)
            {
                return NotFound();
            }

            _context.Images.Remove(image);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ImageExists(int id)
        {
            return (_context.Images?.Any(e => e.ImageId == id)).GetValueOrDefault();
        }

        [HttpGet]
        [Route("new-code")]
        public int getNewCode()
        {
            int maxCode;
            if (_context.Images == null)
            {
                return 0;
            }
            else
            {
                try
                {
                    maxCode = _context.Images.Max(x => x.ImageId);
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
        [Route("new-code2")]
        public int getNewCode2()
        {
            int maxCode;
            if (_context.Images == null)
            {
                return 0;
            }
            else
            {
                try
                {
                    maxCode = _context.Images.Max(x => x.ImageId);
                    maxCode = maxCode + 2;
                    return maxCode;
                }
                catch (Exception)
                {

                    throw;
                }

            }
        }

        [HttpGet]
        [Route("new-code3")]
        public int getNewCode3()
        {
            int maxCode;
            if (_context.Images == null)
            {
                return 0;
            }
            else
            {
                try
                {
                    maxCode = _context.Images.Max(x => x.ImageId);
                    maxCode = maxCode + 3;
                    return maxCode;
                }
                catch (Exception)
                {

                    throw;
                }

            }
        }

    }
}
