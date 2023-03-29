using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Repositories
{
    public class ProductRepository : IProductRepository
    {
        public string createProduct(Product product)
        {
            throw new NotImplementedException();
        }

        public string deleteProduct(int? id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Product>? GetAllProduct()
        {
            throw new NotImplementedException();
        }

        public Product GetProduct(int id)
        {
            throw new NotImplementedException();
        }

        public Product? UpdateProduct(Product product, int id)
        {
            throw new NotImplementedException();
        }
    }
}
