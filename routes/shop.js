const express = require("express");
const { productsData } = require("../controllers/shop");

const router = express.Router();

router.get("/products", productsData);

module.exports = router;
