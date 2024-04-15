const { body, checkExact, param } = require("express-validator");

const addProductValidation = [
  body("product.name", "Invalid product name").isString(),
  body("product.price", "Invalid product price").isNumeric(),
  checkExact(),
];

const productByIdValidation = [param("id", "Invalid id parameter").isNumeric()];

module.exports = {
  addProductValidation,
  productByIdValidation,
};
