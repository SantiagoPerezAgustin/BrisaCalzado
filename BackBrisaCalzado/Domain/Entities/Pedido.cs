using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Pedido
    {
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public string? NombreCliente { get; set; }
        public string? NumeroTelefono { get; set; }
        public decimal Total { get; set; }
        public string? Estado { get; set; }

        public List<PedidoDetalle> Detalles { get; set; } = new List<PedidoDetalle>();
    }
}
