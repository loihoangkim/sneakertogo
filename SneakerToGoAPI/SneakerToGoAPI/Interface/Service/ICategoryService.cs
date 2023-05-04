using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Service
{
    public interface ICategoryService
    {
        IEnumerable<Category>? GetAllCategory();
        Category? GetCategories(int id);
        string createCategory(Category category);
        Category? UpdateCategory(Category category, int id);
        string deleteCategory(int? id);

        int getIdByName(string name);
        int getNewID();
    }
}
