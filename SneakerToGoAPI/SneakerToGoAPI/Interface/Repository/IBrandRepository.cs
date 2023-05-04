using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Repository
{
    public interface IBrandRepository
    {
        IEnumerable<Brand>? GetAllBrand();
        Brand? GetBrand(int id);
        string createBrand(Brand brand);
        Brand? UpdateBrand(Brand brand, int id);
        string deleteBrand(int? id);

        int getNewID();
        int getIdByName(string name);
    }
}
