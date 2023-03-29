using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Repository
{
    public interface ICartDetailRepository
    {
        IEnumerable<CartDetail>? GetAllCartDetailByID(int id);
        CartDetail GetCartDetail(int id);
        string createCartDetail(CartDetail cartDetail);
        CartDetail? UpdateCartDetail(CartDetail cartDetail, int id);
        string deleteCartDetail(int? id);
    }
}
