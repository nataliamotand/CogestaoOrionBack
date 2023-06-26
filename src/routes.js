const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const LembreteController = require("./Controllers/LembreteController");
const app = require('./App');

const rotas = Router();

rotas.post('/login', UsuarioController.login);

module.exports = rotas;