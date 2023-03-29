using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Repository
{
    public interface IImageRepository
    {
        IEnumerable<Image>? GetAllCategoryByID(int id);

        Image GetCategories(int id);
        string createImage(Image image);


    }
}
