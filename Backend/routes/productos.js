const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosControllers");

router.get("/", productosController.getProductos);
router.get("/:id", productosController.getProductoById); // Esta es la ruta que probablemente faltaba
router.post("/", productosController.createProducto);
router.put("/:id", productosController.updateProducto);
router.delete("/:id", productosController.deleteProducto);

module.exports = router;
