const express = require('express');
const sequelize = require('./config/database');
const rotasProdutos = require('./routes/produtoRoutes');
const port = 3000;

// 1. Inicializa o Express
const app = express();

// 2. Configura middlewares
app.use(express.json());

app.use('/produtos',rotasProdutos)

sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado');
    app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
    });
  });