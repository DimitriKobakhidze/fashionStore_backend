require("dotenv").config();
const { CORS_URL, PORT } = process.env;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: CORS_URL,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();

const shopRoutes = require("./routes/shop");

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(shopRoutes);

app.listen(PORT, () => console.log(`App started on port: ${PORT}`));
