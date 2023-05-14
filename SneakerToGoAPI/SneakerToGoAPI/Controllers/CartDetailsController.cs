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
    public class CartDetailsController : ControllerBase
    {
        private readonly SneakerToGoContext _context;

        public CartDetailsController(SneakerToGoContext context)
        {
            _context = context;
        }

        // POST: api/CartDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult PostCartDetail(CartDetail cartDetail)
        {
            int newCartID = cartDetail.CardId;
            int newProductID = cartDetail.ProductId;

            if( _context.CartDetails.Any( c => c.CardId == newCartID && c.ProductId == newProductID))
            {
                var cartDetailUpdate = _context.CartDetails.FirstOrDefault(c => c.CardId == newCartID && c.ProductId == newProductID);
                cartDetailUpdate.Quantity += cartDetail.Quantity;
            }
            else
            {
                _context.CartDetails.Add(cartDetail);
            }
            
            try
            {
                _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CartDetailExists(cartDetail.CardId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }
      
        [HttpPost]
        [Route("update")]
        public ActionResult UpdateCartDetail(int cartId, int productId, int number)
        {
            if (_context.CartDetails == null)
            {
                return NotFound();
            }
            var cartDetail = _context.CartDetails.FirstOrDefault(x => x.CardId == cartId && x.ProductId == productId);
            if (cartDetail == null)
            {
                return NotFound();
            }
            cartDetail.Quantity += number;
            _context.SaveChangesAsync();

            return Ok();
        }


        // DELETE: api/CartDetails/5
        [HttpDelete]
        public async Task<IActionResult> DeleteCartDetail(int cartId,int productId)
        {
            if (_context.CartDetails == null)
            {
                return NotFound();
            }
            var cartDetail = _context.CartDetails.FirstOrDefault( x => x.CardId == cartId && x.ProductId == productId);
            if (cartDetail == null)
            {
                return NotFound();
            }

            _context.CartDetails.Remove(cartDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete]
        [Route("clear")]
        public async Task<IActionResult> ClearCartDetail(int cartId)
        {
            if (_context.CartDetails == null)
            {
                return NotFound();
            }
            var cartDetails = _context.CartDetails.Where(x => x.CardId == cartId);
            if (cartDetails == null)
            {
                return NotFound();
            }
            foreach (var item in cartDetails)
            {
                _context.CartDetails.Remove(item);
            }
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet]
        [Route("findByUserID")]
        public async Task<ActionResult<IEnumerable<CartDetail>>> GetCartDetailsByUserID(int userID)
        {
            if (_context.CartDetails == null)
            {
                return NotFound();
            }
            return await _context.CartDetails.Where( c => c.CardId == userID).ToListAsync();
        }


        private bool CartDetailExists(int id)
        {
            return (_context.CartDetails?.Any(e => e.CardId == id)).GetValueOrDefault();
        }
    }
}
