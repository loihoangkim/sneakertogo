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
    public class ProductsController : ControllerBase
    {
        private readonly SneakerToGoContext _context;

        public ProductsController(SneakerToGoContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            return await _context.Products.ToListAsync();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.ProductId)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
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

        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            if (_context.Products == null)
            {
                return Problem("Entity set 'SneakerToGoContext.Products'  is null.");
            }
            _context.Products.Add(product);
            var model = _context.Models.FirstOrDefault( x => x.ModelId == product.ModelId );
            model.totalQuantity += product.QuanlityRemainning;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProductExists(product.ProductId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProduct", new { id = product.ProductId }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return (_context.Products?.Any(e => e.ProductId == id)).GetValueOrDefault();
        }

        [Route("filter")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts(int id)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            return await _context.Products.Where(p => p.ModelId == id).ToListAsync();
        }

        [HttpGet]
        [Route("new-code")]
        public int getNewCode()
        {
            int maxCode;
            if (_context.Products == null)
            {
                return 0;
            }
            else
            {
                try
                {
                    maxCode = _context.Products.Max(x => x.ProductId);
                    maxCode++;
                    return maxCode;
                }
                catch (Exception)
                {

                    throw;
                }

            }
        }

        [HttpPost]
        [Route("confirm-order")]
        public async Task<IActionResult> confirmOrder(int number, int id)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            else
            {
                // update số lượng sản phẩm
                product.QuanlityRemainning -= number;
                await _context.SaveChangesAsync();
            }
            return Ok();
        }

        [HttpPost]
        [Route("finish-order")]
        public async Task<IActionResult> completeOrderSuccessfully(int number, int id)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            else
            {
                // update số lượng sản phẩm
                var model = _context.Models.FirstOrDefault(m => m.ModelId == product.ModelId);

                model.totalOrder += number;
                model.totalSales += product.Price*number;
                model.totalRevenue += (product.Price - product.ImportPrice)*number;
                await _context.SaveChangesAsync();

            }
            return Ok();
        }
    }
}
