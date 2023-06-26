const app = require("./App");
const dotenv = require("dotenv");
const Loaders = require("./Loaders/index");

dotenv.config();
Loaders.start();
app.listen(process.env.PORT, () => console.log("Servidor Rodando"));
