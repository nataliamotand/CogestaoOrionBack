const UsuarioModel = require("../Models/UsuarioModel");
const jwt = require("jsonwebtoken");
class AuthController{
    async login(req,res){

        try{
            const { email} = req.body;
            
            const usuarioEncontrado = await UsuarioModel.findOne({email: email});
            if (!usuarioEncontrado) 
            return res.status(403).json({ message: "E-mail ou senha inválidos"})
           
            // const {senha:hashedSenha, ...usuario } = usuarioEncontrado.toObject()
            const token = jwt.sign({ usuario }, process.env.JWT_SECRET, 
                {expiresIn: process.env.JWT_EXPIRE_IN,}
            );
      
            res.status(200).json({ token });

        } catch (error){

            res.status(500).json({message: "Erro. Não foi possível autenticar usuário ", error: error.message});
        }
    }
}
module.exports = new AuthController();