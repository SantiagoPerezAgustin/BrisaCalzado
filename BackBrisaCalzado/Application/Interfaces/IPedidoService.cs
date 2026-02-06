using Domain.Entities;

namespace Application.Interfaces
{
    public interface IPedidoService
    {
        Task<Pedido> CrearPedidoAsync(Pedido pedido);
        Task<Pedido?> GetByIdAsync(int id);
        Task<IEnumerable<Pedido>> GetAllAsync();
    }
}