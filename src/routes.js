const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const LembreteController = require("./Controllers/LembreteController");
const app = require('./App');

const rotas = Router();

//USUÁRIOS 
rotas.post('/usuarios', UsuarioController.creat);
rotas.get('/usuarios', UsuarioController.get);
rotas.put('/usuarios/:id', UsuarioController.put);
rotas.delete('/usuarios/:id', UsuarioController.delete);

//LEMBRETES 
rotas.post('/lembretes', LembreteController.post);
rotas.get('/lembretes', LembreteController.get);
rotas.put('/lembretes/:id', LembreteController.put);
rotas.delete('/lembretes/:id', LembreteController.delete);

//LOGIN
rotas.post('/login', AuthController.post);

module.exports = rotas;