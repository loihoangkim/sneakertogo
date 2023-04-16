using Microsoft.EntityFrameworkCore;
using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Interface.Service;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategotyRepository _repository;

        public CategoryService(ICategotyRepository repository)
        {
            _repository = repository;
        }

        public string createCategory(Category category)
        {
            return _repository.createCategory(category);
        }

        public string deleteCategory(int? id)
        {
            return _repository.deleteCategory(id);
        }

        public IEnumerable<Category>? GetAllCategory()
        {
            return _repository.GetAllCategory();
        }

        public Category? GetCategories(int id)
        {
            return _repository.GetCategories(id);
        }

        public int getNewID()
        {
            return _repository.getNewID();
        }

        public Category? UpdateCategory(Category category, int id)
        {
            return _repository.UpdateCategory(category, id);
        }
    }
}
