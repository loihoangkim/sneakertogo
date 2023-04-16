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
    [Route("api/v1/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        private readonly IBrandService _service;

        public BrandsController(IBrandService service)
        {
            _service = service;
        }

        // GET: api/Categories
        [HttpGet]
        public ActionResult<Brand> GetCategories()
        {
            try
            {
                var result = _service.GetAllBrand();

                // Xử lý trả về của DB
                if (result != null)
                {
                    return StatusCode(StatusCodes.Status200OK, result);
                }
                return StatusCode(StatusCodes.Status200OK, "No record");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest, ex.Message);
            }
        }

        // GET: api/Categories/5
        [HttpGet("{id}")]
        public Brand? GetBrand(int id)
        {
            try
            {
                var result = _service.GetBrand(id);
                if (result == null)
                {
                    return result;
                }
                else return null;
            }
            catch (Exception)
            {
                throw;

            }
        }

        // PUT: api/Categories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutBrand(int id, Brand Brand)
        {
            try
            {
                var result = _service.UpdateBrand(Brand, id);

                // Xử lý trả về của DB
                if (result != null)
                {
                    return StatusCode(StatusCodes.Status200OK, result);
                }
                return StatusCode(StatusCodes.Status400BadRequest, "e002");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "e001");
            }
        }

        // POST: api/Categories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult<Brand> PostBrand(Brand Brand)
        {
            try
            {
                var result = _service.createBrand(Brand);

                // Xử lý trả về của DB
                if (result != null)
                {
                    return StatusCode(StatusCodes.Status201Created, result);

                }
                return StatusCode(StatusCodes.Status400BadRequest);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest, ex.Message);
            }
        }

        // DELETE: api/Categories/5
        [HttpDelete("{id}")]
        public IActionResult DeleteBrand(int id)
        {
            try
            {
                var result = _service.deleteBrand(id);

                // Xử lý giá trị trả về từ db
                if (result != null)
                {
                    return StatusCode(StatusCodes.Status200OK, result);
                }
                return StatusCode(StatusCodes.Status400BadRequest, "e002");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "e001");
            }
        }

        [HttpGet]
        [Route("new-code")]
        public int getNewCode()
        {
            return _service.getNewID();
        }
    }
}
