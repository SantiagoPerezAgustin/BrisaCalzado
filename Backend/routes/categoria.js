const express = require("express");
const { Categoria } = require("../models");
const router = express.Router();

// Obtener todas las categorías
router.get("/", async (req, res) => {
  try {
    const categorias = await Categoria.findAll({
      include: ["productos"], // Incluye los productos relacionados
    });
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear categoría
router.post("/", async (req, res) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
