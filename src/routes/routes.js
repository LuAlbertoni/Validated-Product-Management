// Rota de Autenticação
module.exports = function (app) {
    app.use('/auth', require('./auth'));
    app.use('/product', require('./product'));
    app.use('/admin', require('./admin'));
}