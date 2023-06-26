const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const LembreteController = require("./Controllers/LembreteController");
const app = require("./App");
const AuthController = require("./Controllers/AuthController");

const rotas = Router();

//auth
rotas.post("/login", AuthController.login);

module.exports = rotas;
