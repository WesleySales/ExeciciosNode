const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.listaProdutos);
router.get('/:id', produtoController.buscarProduto);
router.post('/', produtoController.criarProduto);
router.put('/:id', produtoController.editarProduto);
router.delete('/:id', produtoController.deletarProduto);

module.exports = router;
