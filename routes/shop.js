const express = require("express");
const {
  productsData,
  addProduct,
  productById,
} = require("../controllers/shop");

const router = express.Router();

router.get("/products", productsData);
router.get("/products/:id", productById);
router.post("/products/add", addProduct);

module.exports = router;
