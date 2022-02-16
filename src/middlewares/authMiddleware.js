require('dotenv').config();
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    // Colocando o token
    let authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ error: 'Token não informado' });
    }

    authHeader = authHeader.split(' ');

    if (authHeader.length !== 2) {
        return res.status(401).send({ error: 'Token inválido' });
    }

    const [scheme, token] = authHeader;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Token inválido' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).send({ error: 'Token inválido' });
        }

        req.userId = decoded.id;
        return next();
    });
};