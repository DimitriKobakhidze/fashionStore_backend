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
};
