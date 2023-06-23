const app = require("./App");
const Loaders = require("./Loaders/index");

Loaders.start();

app.listen(3000, () => console.log("Servidor Rodando"));
