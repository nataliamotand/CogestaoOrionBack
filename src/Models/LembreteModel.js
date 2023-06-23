const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LembreteSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  id_usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuarios",
    required: true,
  },
});

const LembreteModel = mongoose.model("lembretes", LembreteSchema);

module.exports = LembreteModel;
