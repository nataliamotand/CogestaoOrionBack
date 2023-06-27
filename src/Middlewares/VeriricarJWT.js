const jwt = require("jsonwebtoken");

function VerificarJWT(req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader)
    return res
      .status(403)
      .json({ message: "Header de autorização não encontrado" });

  const [bearer, token] = authHeader.split(" ");

  if (!token) return res.status(403).json({ message: "O token é inválido" });

  jwt.verify(token, process.env.JWT_SECRET, (erro, usuario) => {
    if (erro) return res.status(403).json({ message: "O token é inválido" });
    next();
  });
}
