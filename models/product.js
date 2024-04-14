const db = require("../utils/database");

module.exports = class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  static getAllProducts() {
    return db.query("SELECT * FROM  products");
  }

  static getById(id) {
    return db.query("SELECT * from products WHERE id = $1", [id]);
  }

  save() {
    return db.query(
      "INSERT INTO products (product_name,price) VALUES ($1,$2)",
      [this.name, this.price]
    );
  }
};
