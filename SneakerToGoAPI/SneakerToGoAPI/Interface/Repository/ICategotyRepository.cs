using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Repository
{
    public interface ICategotyRepository
    {
        IEnumerable<Category>? GetAllCategory();
        Category? GetCategories(int id);
        string createCategory(Category category);
        Category? UpdateCategory(Category category, int id);
        string deleteCategory(int? id);
        int getNewID();

        int getIdByName(string name);
    }
}
