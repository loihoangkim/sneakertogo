using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Repositories
{
    public class CartRepository : ICartRepository
    {
        public string createCart(Cart cart)
        {
            throw new NotImplementedException();
        }

        public string createCartDetail(CartDetail cartDetail)
        {
            throw new NotImplementedException();
        }

        public string deleteCart(int? id)
        {
            throw new NotImplementedException();
        }

        public string deleteCartDetail(int? id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<CartDetail>? GetAllCartDetailByID(int id)
        {
            throw new NotImplementedException();
        }

        public Cart GetCart(int id)
        {
            throw new NotImplementedException();
        }

        public CartDetail GetCartDetail(int id)
        {
            throw new NotImplementedException();
        }

        public Cart? UpdateCart(Cart cart, int id)
        {
            throw new NotImplementedException();
        }

        public CartDetail? UpdateCartDetail(CartDetail cartDetail, int id)
        {
            throw new NotImplementedException();
        }
    }
}
