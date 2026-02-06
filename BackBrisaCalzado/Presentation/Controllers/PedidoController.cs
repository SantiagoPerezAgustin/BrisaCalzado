using Application.Interfaces;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PedidoController : ControllerBase
    {
        private readonly IPedidoService _pedidoService;

        public PedidoController(IPedidoService pedidoService)
        {
            _pedidoService = pedidoService;
        }

        [HttpPost]
        public async Task<ActionResult<Pedido>> Crear([FromBody] PedidoRequest request)
        {
            if (request?.Items == null || request.Items.Count == 0)
                return BadRequest("El pedido debe tener al menos un ítem.");

            var pedido = new Pedido
            {
                Fecha = DateTime.UtcNow,
                NombreCliente = request.NombreCliente,
                NumeroTelefono = request.TelefonoCliente,
                Estado = "Pendiente",
                Total = request.Items.Sum(i => i.PrecioUnitario * i.Cantidad),
                Detalles = request.Items.Select(i => new PedidoDetalle
                {
                    ProductoId = i.ProductoId,
                    Cantidad = i.Cantidad,
                    PrecioUnitario = i.PrecioUnitario
                }).ToList()
            };

            var created = await _pedidoService.CrearPedidoAsync(pedido);
            return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Pedido>> GetById(int id)
        {
            var pedido = await _pedidoService.GetByIdAsync(id);
            if (pedido == null) return NotFound();
            return Ok(pedido);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pedido>>> GetAll()
        {
            var pedidos = await _pedidoService.GetAllAsync();
            return Ok(pedidos);
        }
    }

    public class PedidoRequest
    {
        public string? NombreCliente { get; set; }
        public string? TelefonoCliente { get; set; }
        public List<PedidoItemRequest> Items { get; set; } = new();
    }

    public class PedidoItemRequest
    {
        public int ProductoId { get; set; }
        public int Cantidad { get; set; }
        public decimal PrecioUnitario { get; set; }
    }
}
