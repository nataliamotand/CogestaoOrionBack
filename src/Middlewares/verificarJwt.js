const jwt = require("jsonwebtoken");

function verificarJwt(req, res, next) {
    const AuthHeader = req.headers.Authorization || req.headers.authorization;
    if(!AuthHeader)
        return res.status(403).json({ message: "Header para autorização não encontrado! "});
    
    const [baerer, token] = AuthHeader.split("");

    if (!/^Bearer$/.test(bearer))
        return res.status(403).json({ message: "Header para autorização fora do formato padrão" });

    if(!token)
        return res.status(403).json({ message: "Token não encontrado "});
    
    jwt.verify(token, process.env.JWT_SEGREDO, (err, dados) => { //pegar o segredo e colocar no .env
        if(err)
            return res.status(403).json({ message: "Token inválido" });
            req.usuarioId = dados.usuario._id;
        
            next();
    });
}

module.exports = verificarJwt;