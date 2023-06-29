const jwt = require("jsonwebtoken");

function verificarJwt(req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  
  if (!authHeader) return res.status(403).json({ message: "Header de autorização não encontrado" });

  const [bearer, token] = authHeader.split(" ");

  if(!/^Beare$/.test(bearer))
    return res.status(403).json({message: "Header de autorização mal formatado"});

  if (!token)
    return res.status(403).json({ message: "O token é inválido ou está vazio" });

  jwt.verify(token, process.env.JWT_SECRET, (erro, usuario) => {
    if (erro) return res.status(403).json({ message: "JWT token é inválido" });
    req.usuarioId = usuario._id;
    next();
  });
}

module.exports = verificarJwt;
