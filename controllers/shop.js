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

exports.addProduct = (req, res) => {
  const { name, price } = req.body.product;

  const newProduct = new Product(null, name, price);
  newProduct
    .save()
    .then(() => res.status(200).send({ msg: "Product added successfully." }))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ msg: "Some error occurred while adding product." });
    });
};

exports.productById = (req, res) => {
  const { id } = req.params;

  Product.getById(id)
    .then((data) => res.status(200).send(data.rows))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ msg: "Some error occurred while retrieving product." });
    });
};
