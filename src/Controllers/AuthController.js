const UsuarioModel = require("../Models/UsuarioModel");

class AuthController{
    async login(req,res){

        try{
            const { email, senha} = req.body;
            
            const usuarioEncontrado = await UsuarioModel.findOne({email: email}).select;
            if (!usuarioEncontrado) 
            return res.status(403).json({ message: "E-mail ou senha inválidos"})
           
            res.sendStatus(200);

        } catch (error){

            res.status(500).json({message: "Erro. Não foi possível autenticar usuário ", error: error.message});
        }
    }
}
module.exports = new AuthController();