using Microsoft.EntityFrameworkCore;
using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Interface.Service;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Repositories
{
    public class CategoryRepository : ICategotyRepository
    {
        private readonly SneakerToGoContext _context;

        public CategoryRepository(SneakerToGoContext context)
        {
            _context = context;
        }
        public string createCategory(Category category)
        {
            _context.Categories.Add(category);
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CategoryExists(category.CategoryId))
                {
                    return "Trùng mã danh mục";
                }
                else
                {
                    return "Có lỗi xảy ra";
                }
            }

            return "Thêm thành công";
        }

        public string deleteCategory(int? id)
        {
            if (_context.Categories == null)
            {
                return "Không tồn tại danh mục nào";
            }
            else
            {
                var entity = _context.Categories.FirstOrDefault(item => item.CategoryId == id);
                if (entity == null)
                {
                    return "Không tìm được danh mục có mã này";
                }
                else
                {
                    entity.IsDelete = "true";
                    return "Xóa thành công";
                }
            }
        }

        public IEnumerable<Category>? GetAllCategory()
        {
            if (_context.Categories == null)
            {
                return null;
            }
            return _context.Categories.ToList();
        }

        public Category? GetCategories(int id)
        {
            var category = _context.Categories.FirstOrDefault(c => c.CategoryId == id);

            if (category == null)
            {
                return null;
            }
            return category;
        }

        public int getNewID()
        {
            int maxCode;
            if (_context.Categories == null)
            {
                return 0;
            }
            else
            {
                try
                {
                    maxCode = _context.Categories.Max(x => x.CategoryId);
                    maxCode++;
                    return maxCode;
                }
                catch (Exception)
                {

                    throw;
                }

            }

        }

        public Category? UpdateCategory(Category category, int id)
        {
            _context.Entry(category).State = EntityState.Modified;
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }
            return category;
        }
        private bool CategoryExists(int id)
        {
            return (_context.Categories?.Any(e => e.CategoryId == id)).GetValueOrDefault();
        }


    }
}
