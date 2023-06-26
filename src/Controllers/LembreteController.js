const LembreteModel = require("../Models/LembreteModel");

class LembreteController {
    async getLembretesPorIdUsuario(req, res) {
        const { id } = req.params;
        try {
            const lembretes = await LembreteModel.find({ id_usuario: id });

            res.status(200).send(lembretes);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    async createLembrete(req, res) {
        const { id } = req.params;
        const { titulo, descricao, data} = req.body;

        try {
            const tituloExiste = await LembreteModel.findOne({titulo, id_usuario: id});
            if (tituloExiste) return res.status(403).send({message: "Título já existente!"});

            await LembreteModel.create({id_usuario: id, ...req.body});

            res.sendStatus(201);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    async deleteLembrete(req, res) {
        const { id } = req.params;
        const { titulo } = req.body;
        
        try {
            const lembreteExiste = await LembreteModel.findOne({titulo, id_usuario: id});
            if (!lembreteExiste) return res.status(404).send("Lembrete não existe");

            await LembreteModel.deleteOne({titulo, id_usuario: id})
            res.sendStatus(202)
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

module.exports = new LembreteController();
