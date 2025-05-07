const express = require ('express')
const router = express.Router();
const ProdutoController = require('../controllers/produtoController');

router.get('/', ProdutoController.listar)
router.get('/:id', ProdutoController.buscarPorId)
router.post('/', ProdutoController.criarProduto)
router.put('/:id', ProdutoController.editarProduto)
router.delete('/:id', ProdutoController.deletarProduto)

module.exports = router;