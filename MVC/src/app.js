const express = require('express');
const sequelize = require('./config/database');
const ProdutoController = require('./controllers/produtoController');
const port = 3000;

// 1. Inicializa o Express
const app = express();

// 2. Configura middlewares
app.use(express.json());


app.get('/produtos', ProdutoController.listar)
app.get('/produtos/:id', ProdutoController.buscarPorId)
app.post('/produtos', ProdutoController.criarProduto)
app.put('/produtos/:id', ProdutoController.editarProduto)
app.delete('/produtos/:id', ProdutoController.deletarProduto)


sequelize.sync().then(() => {
    app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
    });
  });