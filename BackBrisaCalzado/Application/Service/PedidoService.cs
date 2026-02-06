using Application.Interfaces;
using Domain.Entities;
using Domain.Intefaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Service
{
    public class PedidoService : IPedidoService
    {
        private readonly IPedidoRepository _pedidoRepository;

        public PedidoService(IPedidoRepository pedidoRepository)
        {
            _pedidoRepository = pedidoRepository;
        }

        public Task<Pedido> CrearPedidoAsync(Pedido pedido)
        {
            return _pedidoRepository.AddAsync(pedido);
        }

        public Task<Pedido?> GetByIdAsync(int id)
        {
            return _pedidoRepository.GetByIdAsync(id);
        }

        public Task<IEnumerable<Pedido>> GetAllAsync()
        {
            return _pedidoRepository.GetAllAsync();
        }
    }
}
