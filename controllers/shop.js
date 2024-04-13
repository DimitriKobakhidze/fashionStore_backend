const Product = require("../models/product");

exports.productsData = (req, res) => {
  Product.getAllProducts()
    .then((products) => res.status(200).send(products.rows))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ msg: "Some error occurred while retrieving products." });
    });
};
