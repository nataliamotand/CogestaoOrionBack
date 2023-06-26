const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect(process.env.MONGO_URI);
}

//8PRpJtk4G8y8Y9qK
//orioncogestao

module.exports = startDB;
