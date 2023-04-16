using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Service
{
    public interface IBrandService
    {
        IEnumerable<Brand>? GetAllBrand();
        Brand? GetBrand(int id);
        string createBrand(Brand brand);
        Brand? UpdateBrand(Brand brand, int id);
        string deleteBrand(int? id);
        int getNewID();
    }
}
