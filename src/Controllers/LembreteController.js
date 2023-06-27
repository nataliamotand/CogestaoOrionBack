const LembreteModel = require("../Models/LembreteModel");
const UsuarioModel = require("../Models/UsuarioModel");

class LembreteController {

    async createLembrete(req, res){
        try{
            const usuarioEncontrado = await UsuarioModel.findById(req.body.id_usuario);
            if(!usuarioEncontrado)
                return res.status(404).json({ message: "Usuario não encontrado. "});
            
            const lembretes = await LembreteModel.create(req.body);

            return res.status(200).json(lembretes);
        }catch(error){
            res.status(500).json({ message: "Não foi possível criar novo lembrete.", error: error.message });
        }
    }

    async getLembretesporIdUsuario(req, res){
        try{
            const lembretes = await LembreteModel.find().populate('id_usuario', '-senha');

            return res.status(200).json(lembretes);
        } catch(error){
            res.status(500).json({ message: "Não foi possível mostrar os lembretes do usuário.", error: error.message });
        }
    }

    async deleteLembrete(req, res){
        try{
            const { id_usuario } = req.params;

            const lembreteEncontrado = await LembreteModel.findById({ id_usuario });
            if(!lembreteEncontrado)
                return res.status(404).json({ message: "Lembrete não encontrado." });
            
            await lembreteEncontrado.deleteOne();

            res.status(200).json({ message: "Lembrete deletado! "});
        } catch(error){
            res.status(500).json({ message: "Não foi possivel deletar este lembrete.", error: error.message });
        }
    }
}

module.exports = new LembreteController();
