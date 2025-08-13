const express = require("express");
const cors = require("cors");
const { sequelize, Producto, Categoria } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/productos", require("./routes/productos"));
app.use("/api/categorias", require("./routes/categorias"));

app.use(
  cors({
    origin: "http://localhost:5173", // Puerto de Vite
    credentials: true,
  })
);

// Sincronización mejorada
const initDB = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Base de datos sincronizada");

    // Crear datos iniciales
    const categoria = await Categoria.create({
      nombre: "Calzado",
      descripcion: "Zapatos y botas",
    });

    await Producto.create({
      nombre: "Bota Brisa",
      precio: 120.0,
      categoriaId: categoria.id,
    });

    console.log("Datos iniciales creados");
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  }
};

// Iniciar servidor
const startServer = () => {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

// Ejecutar inicialización
initDB().then(startServer);
