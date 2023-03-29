using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Service
{
    public interface IImageService
    {
        IEnumerable<Image>? GetAllCategory(int id);
        Image GetCategories(int id);
        string createImage(Image image);
    }
}
