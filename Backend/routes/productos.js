const express = require('express');
const { Producto } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const productos = await Producto.findAll({
      include: ['categoria']
    });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
