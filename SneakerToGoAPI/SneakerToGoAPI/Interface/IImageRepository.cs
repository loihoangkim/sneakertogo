using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface
{
    public interface IImageRepository
    {
        IEnumerable<Image>? GetAllCategory(int id);

        Image GetCategories(int id);
        string createImage(Image image);


    }
}
