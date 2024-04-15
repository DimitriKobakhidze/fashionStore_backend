const express = require("express");
const {
  productsData,
  addProduct,
  productById,
} = require("../controllers/shop");
const {
  addProductValidation,
  productByIdValidation,
} = require("../middlewares/validations/product");
const {
  validatorHandler,
} = require("../middlewares/validations/validationHandler");

const router = express.Router();

router.get("/products", productsData);
router.get(
  "/products/:id",
  [productByIdValidation, validatorHandler],
  productById
);
router.post(
  "/products/add",
  [addProductValidation, validatorHandler],
  addProduct
);

module.exports = router;
