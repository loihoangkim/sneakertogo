using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Repository
{
    public interface ICartRepository
    {
        //Cart GetCart(int id);
        string createCart(Cart cart);
        Cart? UpdateCart(Cart cart, int id);
        string deleteCart(int? id);
    }
}
