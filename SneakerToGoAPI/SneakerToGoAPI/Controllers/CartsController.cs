using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SneakerToGoAPI.Interface.Service;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private readonly ICartService _cartService;
        public CartsController(ICartService cartService)
        {
            _cartService = cartService;
        }


        // POST: api/Carts
        [HttpPost]
        public IActionResult CreateCart(Cart cart)
        {
            
            var result = _cartService.createCart(cart);
            if( result.Equals("Tạo thành công") )
            {
                return StatusCode(StatusCodes.Status201Created, result);
            }
            else
            {
                return StatusCode(StatusCodes.Status400BadRequest, result);
            }
        }

        // DELETE: api/Carts/5
        [HttpDelete("{id}")]
        public IActionResult DeleteCart(int id)
        {
            var result = _cartService.deleteCart(id);
            if (result.Equals("Xóa thành công"))
            {
                return StatusCode(StatusCodes.Status200OK, result);
            }
            else
            {
                return StatusCode(StatusCodes.Status400BadRequest, result);
            }
        }

        // GET: api/Carts
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Cart>>> GetCarts()
        //{
        //  if (_context.Carts == null)
        //  {
        //      return NotFound();
        //  }
        //    return await _context.Carts.ToListAsync();
        //}

        // GET: api/Carts/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Cart>> GetCart(int id)
        //{
        //  if (_context.Carts == null)
        //  {
        //      return NotFound();
        //  }
        //    var cart = await _context.Carts.FindAsync(id);

        //    if (cart == null)
        //    {
        //        return NotFound();
        //    }

        //    return cart;
        //}

        // PUT: api/Carts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutCart(int id, Cart cart)
        //{
        //    if (id != cart.CardId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(cart).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!CartExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}
    }
}
