const LembreteModel = require("../Models/LembreteModel");
const UsuarioModel = require("../Models/UsuarioModel");
class LembreteController {
  async createLembrete(req, res) {
    const id = req.body.id_usuario;
    const usuarioEncontrado = await UsuarioModel.findOne({ _id: id });

    if (!usuarioEncontrado)
      return res
        .status(404)
        .json({ message: `Usuário com id ${id} não encontrado` });

    const lembrete = await LembreteModel.create(req.body);
    if (!lembrete)
      return res.status(500).json({ message: "Incapaz de criar lembrete" });

    res.status(200).json({ message: "OK", lembrete });
  }

  async getLembretesPorIdUsuario(req, res) {
    const id = req.body.id_usuario;
    const lembretes = await LembreteModel.find({ id_usuario: id });

    if (lembretes.length <= 0)
      return res.status(404).json({
        message: `O usuário com id ${id} não possui lembretes ou não existe`,
      });

    res.status(200).json(lembretes);
  }

  async deleteLembrete(req, res) {
    const { id } = req.params;
    const lembreteDeletar = await LembreteModel.findOne({ _id: id });

    if (!lembreteDeletar)
      return res
        .status(404)
        .json({ message: `Lembrete com id ${id} não econtrado` });

    await lembreteDeletar.deleteOne();
    res.status(200).json({ message: "Lembrete deletado com sucesso" });
  }
}

module.exports = new LembreteController();
