using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Service
{
    public interface IProductService
    {
        IEnumerable<Product>? GetAllProduct();
        Product GetProduct(int id);
        string createProduct(Product product);
        Product? UpdateProduct(Product product, int id);
        string deleteProduct(int? id);
    }
}
