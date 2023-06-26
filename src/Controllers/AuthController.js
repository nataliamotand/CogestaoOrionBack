const UsuarioModel = require("../Models/UsuarioModel");
const jwt = require("jsonwebtoken");

class AuthController {
  async login(req, res) {
    const email = req.body.email;
    const usuario = await UsuarioModel.findOne({ email });

    if (email === undefined)
      return res
        .status(400)
        .json({ message: "Email não enviado na requisição" });
    else if (email === "")
      return res.status(404).json({ message: "Email vazio" });
    else if (!usuario)
      return res
        .status(404)
        .json({ message: `Usuário com email ${email} não encontrado` });

    const token = jwt.sign({ usuario }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE_IN,
    });

    console.log(token);
    console.log(usuario);
    res.status(200).json({ message: "OK" });
  }
}

module.exports = new AuthController();
