const express = require("express");
const cors = require("cors");
const app = express();

// Importar rutas
const categoriaRoutes = require("./routes/categoria");
const productosRoutes = require("./routes/productos");

// Middlewares
app.use(express.json()); // Para parsear JSON

app.use(cors());

// Rutas
app.use("/api/categorias", categoriaRoutes);
app.use("/api/productos", productosRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API de Brisa Calzado funcionando");
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
