const LembreteModel = require("../Models/LembreteModel");

class LembreteController {

   async create (req, res){
        const lembrete = await LembreteModel.create(req.body);
        return res.status(200).json(lembrete);
    }

    async read (req, res){
        const lembretes = await LembreteModel.find();
        return res.status(200).json(lembretes);
    }
    async readById(req, res) {
        const { id } = req.params;

        const lembrete = await LembreteModel.findById(id);

        return res.status(200).json(lembrete);
    }

    async delete (req,res){
        const { id } = req.params
        await LembreteModel.findByIdAndDelete(id);

        return res.status(200).json({ "mensagem" : "Lembrete deletado com sucesso!"});
    }

}

module.exports = new LembreteController();
