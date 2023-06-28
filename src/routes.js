const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const LembreteController = require("./Controllers/LembreteController");
const app = require("./App");
const AuthController = require("./Controllers/AuthController");
const VerificarJWT = require("./Middlewares/VeriricarJWT");

const rotas = Router();

//auth
rotas.post("/login", AuthController.login);

//lembrete
rotas.post("/lembrete", VerificarJWT, LembreteController.createLembrete);
rotas.get("/lembrete", LembreteController.getLembretesPorIdUsuario);
rotas.delete("/lembrete/:id", LembreteController.deleteLembrete);
module.exports = rotas;
