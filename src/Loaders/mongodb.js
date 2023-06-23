const mongoose = require("mongoose")

async function startDB(){
  await mongoose.connect('mongodb+srv://orioncogestao:8PRpJtk4G8y8Y9qK@cluster0.ipl8yfk.mongodb.net/?retryWrites=true&w=majority');
}

//8PRpJtk4G8y8Y9qK
//orioncogestao

module.exports = startDB;