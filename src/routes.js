const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const LembreteController = require("./Controllers/LembreteController");
const AuthController = require("./Controllers/AuthController");
const app = require('./App');

const rotas = Router();

//USUARIOS
rotas.post('/usuarios', UsuarioController.create);
rotas.get('/usuarios', UsuarioController.read);
rotas.get('/usuarios/:id', UsuarioController.readById);
rotas.delete('/usuarios/:id', UsuarioController.delete);

//LEMBRETES
rotas.post('/lembretes', LembreteController.create);
rotas.get('/lembretes', LembreteController.read);
rotas.get('/lembretes/:id', LembreteController.readById);
rotas.delete('/lembretes/:id', LembreteController.delete);

//AUTH
rotas.post("/login", AuthController.login);

module.exports = rotas;