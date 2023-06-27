const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {
        async create (req, res){
            try{
                const usuario = await UsuarioModel.create(req.body);
                return res.status(200).json(usuario);
            } catch(error){
                res.status(500).json({message: "Erro. Não foi possível criar usuário ", error: error.message});
            }
         }

         async read (req, res){
            try{
                const usuarios = await UsuarioModel.find();
                return res.status(200).json(usuarios);
            }catch (error){
                res.status(500).json({message: "Erro. Não foi possível ler usuários ", error: error.message});
            }
             
         }

        async readById(req, res) {
            try{
                const { id } = req.params;

                const usuario = await UsuarioModel.findById(id);
    
                return res.status(200).json(usuario);
            }catch(error){
                res.status(500).json({message: "Erro. Não foi possível ler usuário ", error: error.message});
            }
        }
          
        
         async delete (req,res){
            try{
                const { id } = req.params;
                await UsuarioModel.findByIdAndDelete(id);
        
                return res.status(200).json({ "mensagem" : "Usuario deletado com sucesso!"});
            }catch(error){
                res.status(500).json({message: "Erro. Não foi possível ler usuário ", error: error.message});
            }
            
         }
     
     
}
 
module.exports = new UsuarioController();
