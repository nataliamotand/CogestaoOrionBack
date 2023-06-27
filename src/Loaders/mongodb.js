const mongoose = require("mongoose")

async function startDB(){
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Banco de dados inicializado");
}

//8PRpJtk4G8y8Y9qK
//orioncogestao

module.exports = startDB;