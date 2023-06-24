const express = require("express");
const rotas = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(rotas);
app.use(cors()); //conecta o frontend com backend

module.exports = app;