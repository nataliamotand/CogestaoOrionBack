function VerificarUsuario(req, res, next) {
    const usuarioId = req.params.id || req.params.id_usuario || req.params.body_usuario;

    if(req.usuarioId !== usuarioId)
        return res.status(403).json({ message: "Operação não autorizada. "});

    next();
}

module.exports = VerificarUsuario;