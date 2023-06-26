const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const LembreteController = require("./Controllers/LembreteController");
const app = require('./App');

const rotas = Router();

rotas.post('/login', UsuarioController.login);
rotas.get('/lembretes/:id', LembreteController.getLembretesPorIdUsuario);
rotas.post('/create-lembrete/:id', LembreteController.createLembrete);
rotas.delete('/delete-lembrete/:id', LembreteController.deleteLembrete);

module.exports = rotas;