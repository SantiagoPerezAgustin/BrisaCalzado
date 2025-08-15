const { Producto, Categoria } = require("../models");

// Obtener todos los productos
exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      include: [{ model: Categoria, as: "categoria" }],
    });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

// Obtener un producto por ID
exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id, {
      include: [{ model: Categoria, as: "categoria" }],
    });
    if (!producto)
      return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, categoriaId } = req.body;
    if (!nombre || !precio || !stock || !categoriaId) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }
    const nuevoProducto = await Producto.create({
      nombre,
      descripcion,
      precio,
      stock,
      categoriaId,
    });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

// Actualizar un producto existente
exports.updateProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, categoriaId } = req.body;
    const producto = await Producto.findByPk(req.params.id);
    if (!producto)
      return res.status(404).json({ error: "Producto no encontrado" });

    producto.nombre = nombre ?? producto.nombre;
    producto.descripcion = descripcion ?? producto.descripcion;
    producto.precio = precio ?? producto.precio;
    producto.stock = stock ?? producto.stock;
    producto.categoriaId = categoriaId ?? producto.categoriaId;

    await producto.save();
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

// Eliminar un producto
exports.deleteProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto)
      return res.status(404).json({ error: "Producto no encontrado" });
    await producto.destroy();
    res.json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};
