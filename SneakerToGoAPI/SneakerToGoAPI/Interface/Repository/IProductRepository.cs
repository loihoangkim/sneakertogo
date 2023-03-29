using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Repository
{
    public interface IProductRepository
    {
        IEnumerable<Product>? GetAllProduct();
        Product GetProduct(int id);
        string createProduct(Product product);
        Product? UpdateProduct(Product product, int id);
        string deleteProduct(int? id);
    }
}
