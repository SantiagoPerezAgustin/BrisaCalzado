const express = require('express');
const { Categoria } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const categorias = await Categoria.findAll({
      include: ['productos']
    });
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
