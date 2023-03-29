using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Service
{
    public interface ICartDetailService
    {
        IEnumerable<CartDetail>? GetAllCartDetailByID(int id);
        CartDetail GetCartDetail(int id);
        string createCartDetail(CartDetail cartDetail);
        CartDetail? UpdateCartDetail(CartDetail cartDetail, int id);
        string deleteCartDetail(int? id);
    }
}
