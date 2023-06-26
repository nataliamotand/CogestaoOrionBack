const UsuarioModel = require("../Models/UsuarioModel");
const jwt = require("jsonwebtoken")

class UsuarioController {
    async login(req, res) {
        const { email } = req.body;
        try {
            const usuarioEncontrado = await UsuarioModel.findOne({ email });
            if(!usuarioEncontrado) return res.status(403).json({message: "Email invalido"});

            const usuario = usuarioEncontrado.toObject();
            const token = jwt.sign({ usuario }, 
                "68d3f0ee999d2717ea8e97a1f25e6055d467d8914c3766c9a7b74084970e05a0cafbb61f64a835497b0f385d20ac4418", 
                { expiresIn: "1d" });

            res.status(200).json({ token });
        } catch (err) {
            res.status(500).send(err)
        }
    }
}

module.exports = new UsuarioController();
