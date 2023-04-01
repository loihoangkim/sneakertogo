using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Interface.Service;
using SneakerToGoAPI.Models;
using SneakerToGoAPI.Repositories;

namespace SneakerToGoAPI.Services
{
    public class CartService : ICartService
    {
        public ICartRepository _cartRepository;
        public CartService(ICartRepository cartRepository) {
            _cartRepository = cartRepository;
        }
        public string createCart(Cart cart)
        {
           return _cartRepository.createCart(cart);
        }

        public string deleteCart(int? accountId)
        {
            return _cartRepository.deleteCart(accountId);
        }

        public Cart GetCart(int id)
        {
            throw new NotImplementedException();
        }

        public Cart? UpdateCart(Cart cart, int id)
        {
            throw new NotImplementedException();
        }
    }
}
