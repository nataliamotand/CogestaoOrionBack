const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
});

const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);

module.exports = UsuarioModel;
