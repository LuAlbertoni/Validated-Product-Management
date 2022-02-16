const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

// Retornar mensagem de sucesso
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Acesso bem sucedido' }); // Se a rota for acessada
});

module.exports = router;