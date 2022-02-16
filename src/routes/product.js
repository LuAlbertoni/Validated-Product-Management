const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Exibir para o usuário todos os produtos
router.get('/list', productController.list);

router.use(authMiddleware);

// Adicionar produtos
router.post('/add', productController.add);
router.post('/remove', productController.remove);

module.exports = router;