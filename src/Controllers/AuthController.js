const UsuarioModel = require("../Models/UsuarioModel");

class AuthController {
  async login(req, res) {
    const email = req.body.email;
    console.log(email);

    if (email === undefined)
      res.status(400).json({ message: "Email não enviado na requisição" });
    else if (email === "") res.status(404).json({ message: "Email vazio" });
    else res.status(200).json({ message: "OK" });
  }
}

module.exports = new AuthController();
