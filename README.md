# Brisa Calzado

E-commerce de calzado construido con **.NET (Backend)** y **React + Vite (Frontend)**.

## 📋 Descripción

Brisa Calzado es una tienda online de calzado con catálogo de productos por categorías, carrito de compras, pedidos y formulario de contacto.

## 🛠️ Stack tecnológico

| Capa        | Tecnología                      |
|------------|----------------------------------|
| **Backend**  | .NET 8, Entity Framework, SQL Server |
| **Frontend** | React 19, Vite 7, Tailwind CSS 4, React Router |
| **Base de datos** | SQL Server (LocalDB / Express) |

## 📁 Estructura del proyecto

```
BrisaCalzado/
├── BackBrisaCalzado/     # API .NET
│   ├── Domain/           # Entidades (Productos, Categorías, Pedidos)
│   ├── Application/      # Servicios (ProductoService, CategoriaService, PedidoService)
│   ├── Infrastructure/   # Repositorios, DbContext, Migraciones
│   └── Presentation/     # Controllers, Program.cs
├── Frontend/             # App React + Vite
│   └── src/
│       ├── components/   # Navbar, Footer, ProductsGrid, etc.
│       ├── page/        # Home, Products, Cart, SobreNosotros
│       ├── context/     # CartContext
│       └── ...
└── README.md
```

## 🚀 Cómo ejecutar

### Requisitos previos

- **.NET 8 SDK** – [Descargar](https://dotnet.microsoft.com/download)
- **Node.js 18+** y npm
- **SQL Server** (LocalDB, Express o Developer) – [Descargar](https://www.microsoft.com/sql-server/sql-server-downloads)

### 1. Backend (API)

```bash
cd BackBrisaCalzado
cd Presentation
dotnet run
```

La API se ejecuta en **https://localhost:7186**.

**Swagger:** https://localhost:7186/swagger

### 2. Base de datos

Configurá la cadena de conexión en `BackBrisaCalzado/Presentation/appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost\\SQLEXPRESS;Database=BackBrisaCalzadoDb;Trusted_Connection=True;TrustServerCertificate=True"
  }
}
```

Ajustá `SQLEXPRESS` según tu instalación (por ejemplo `SQLEXPRESS03`).

Si hacés cambios en las entidades, ejecutá las migraciones desde `Infrastructure`:

```bash
cd BackBrisaCalzado/Infrastructure
dotnet ef migrations add NombreMigracion --startup-project ../Presentation
dotnet ef database update --startup-project ../Presentation
```

### 3. Frontend

```bash
cd Frontend
npm install
npm run dev
```

El frontend corre en **http://localhost:5173**.

## 📌 Rutas principales

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio |
| `/products` | Catálogo de productos (con filtros por categoría y búsqueda) |
| `/cart` | Carrito de compras |
| `/sobre-nosotros` | Sobre nosotros |
| `/proyecto/:id` | Detalle de proyecto |

## ✨ Funcionalidades

- **Productos por categoría**: Secciones separadas (ej. Zapatillas, Botas)
- **Búsqueda** por nombre, descripción o categoría
- **Ordenamiento**: Nombre A-Z/Z-A, Precio menor/mayor
- **Carrito de compras** con Context API
- **Modal de detalles** al hacer clic en una tarjeta de producto
- **Formulario de contacto** (EmailJS)
- **Responsive** con Tailwind CSS

## 🔗 API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/Producto` | Lista todos los productos |
| GET | `/api/Producto/{id}` | Obtiene un producto por ID |
| GET | `/api/Categoria` | Lista categorías |
| POST | `/api/Pedido` | Crea un pedido |

## 📄 Licencia

Proyecto privado – Brisa Calzado.
