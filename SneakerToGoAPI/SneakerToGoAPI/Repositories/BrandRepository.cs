using Microsoft.EntityFrameworkCore;
using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Models;
using System.Drawing.Drawing2D;

namespace SneakerToGoAPI.Repositories
{
    public class BrandRepository : IBrandRepository
    {
        private readonly SneakerToGoContext _context;

        public BrandRepository(SneakerToGoContext context) 
        {
            _context = context;
        }
        public string createBrand(Brand brand)
        {
            if( _context.Brands.Any (  b => b.BrandId.Equals( brand.BrandId)) )
            {
                return "Trùng mã thương hiệu";
            }
            _context.Brands.Add(brand);
            try
            {
                 _context.SaveChanges();
                return "Thêm thành công";
            }
            catch (DbUpdateException)
            {
                throw;
            }
        }

        public string deleteBrand(int? id)
        {
            if (_context.Brands == null)
            {
                return "Không còn thương hiệu nào.";
            }
            var brand = _context.Brands.FirstOrDefault(b => b.BrandId.Equals(id));
            if( brand == null )
            {
                return "Không tìm được thương hiệu";
            }
            else
            {
                _context.Brands.Remove(brand);
                _context.SaveChanges();
                return "Xóa thành công";
            }
            
        }

        public IEnumerable<Brand>? GetAllBrand()
        {
            if (_context.Brands == null)
            {
                return null;
            }
            return _context.Brands.ToList();
        }

        public Brand? GetBrand(int id)
        {
            if (_context.Brands == null)
            {
                return null;
            }
            var brand = _context.Brands.FirstOrDefault(b => b.BrandId.Equals(id));
            if (brand == null)
            {
                return null;
            }
            else
            {
                return brand;
            }
        }

        public Brand? UpdateBrand(Brand brand, int id)
        {
            if (id != brand.BrandId)
            {
                return null;
            }
            _context.Entry(brand).State = EntityState.Modified;
            try
            {
                 _context.SaveChanges();
                return brand;
            }
            catch (DbUpdateConcurrencyException)
            {
                if ( _context.Brands.Any( b => b.BrandId.Equals(id)))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }

        }

        public int getNewID()
        {
            int maxCode;
            if (_context.Brands == null)
            {
                return 0;
            }
            else
            {
                try
                {
                    maxCode = _context.Brands.Max(x => x.BrandId);
                    maxCode++;
                    return maxCode;
                }
                catch (Exception)
                {

                    throw;
                }

            }
        }

        public int getIdByName(string name)
        {
            if (_context.Brands == null)
            {
                return -1;
            }
            else
            {
                int code = _context.Brands.FirstOrDefault(b => b.Name == name).BrandId;
                return code;
            }
        }
    }
}
