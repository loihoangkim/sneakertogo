using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Service
{
    public interface ICartService
    {
        Cart GetCart(int id);
        string createCart(Cart cart);
        Cart? UpdateCart(Cart cart, int id);

        string deleteCart(int? id);
    }
}
