using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Interface.Service;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Services
{
    public class BrandService : IBrandService
    {
        private readonly IBrandRepository _brandRepository;

        public BrandService(IBrandRepository brandRepository)
        {
            this._brandRepository = brandRepository;
        }

        public string createBrand(Brand brand)
        {
            return _brandRepository.createBrand(brand);
        }

        public string deleteBrand(int? id)
        {
            return _brandRepository.deleteBrand(id);
        }

        public IEnumerable<Brand>? GetAllBrand()
        {
            return _brandRepository.GetAllBrand();
        }

        public Brand? GetBrand(int id)
        {
            return _brandRepository.GetBrand(id);
        }

        public int getNewID()
        {
            return _brandRepository.getNewID();
        }

        public Brand? UpdateBrand(Brand brand, int id)
        {
            return _brandRepository.UpdateBrand(brand, id);
        }

        public int getIdByName(string name)
        {
            return _brandRepository.getIdByName(name);
        }
    }
}
