using Microsoft.EntityFrameworkCore;
using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Repositories
{
    public class CartRepository : ICartRepository
    {
        private readonly SneakerToGoContext _context;

        public CartRepository(SneakerToGoContext context) {
            _context = context;
        }

        public string createCart(Cart cart)
        {
            if(_context.Carts.Any( x => x.CardId.Equals( cart.CardId)) ) 
            {
                return "Trùng mã giỏ hàng";            
            }
            _context.Carts.Add(cart);
            try
            {
                _context.SaveChanges();
                return "Tạo thành công";
            }
            catch (DbUpdateException)
            {
                return "Tạo thất bại";
            }
        }

        public string deleteCart(int? id)
        {
            var cart =  _context.Carts.FirstOrDefault( c => c.AccountId.Equals(id));
            if (cart == null)
            {
                return "Không tìm thấy người dùng";
            }
            _context.Carts.Remove(cart);
            _context.SaveChangesAsync();
            return "Xóa thành công";
        }

        public Cart? UpdateCart(Cart cart, int id)
        {
            throw new NotImplementedException();
        }

        public Cart GetCart(int id)
        {
            throw new NotImplementedException();
        }

        //public string createCartDetail(CartDetail cartDetail)
        //{
        //    throw new NotImplementedException();
        //}

        //public string deleteCart(int? id)
        //{
        //    throw new NotImplementedException();
        //}

        //public string deleteCartDetail(int? id)
        //{
        //    throw new NotImplementedException();
        //}

        //public IEnumerable<CartDetail>? GetAllCartDetailByID(int id)
        //{
        //    throw new NotImplementedException();
        //}

        //public Cart GetCart(int id)
        //{
        //    throw new NotImplementedException();
        //}

        //public CartDetail GetCartDetail(int id)
        //{
        //    throw new NotImplementedException();
        //}


        //public CartDetail? UpdateCartDetail(CartDetail cartDetail, int id)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
