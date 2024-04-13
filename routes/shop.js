const express = require("express");
const { productsData, addProduct } = require("../controllers/shop");

const router = express.Router();

router.get("/products", productsData);
router.post("/products/add", addProduct);

module.exports = router;
