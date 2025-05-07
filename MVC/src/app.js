const express = require('express');
const conectarDB = require('./config/database');
const rotasProdutos = require('./routes/produtoRoutes');
const rotasView = require('./routes/viewRoutes');
const port = 3000;

// 1. Inicializa o Express
const app = express();

// 2. Configura middlewares
app.use(express.json());

app.use('/produtos',rotasProdutos)
app.use('/',rotasView)

app.set('view engine','ejs')

conectarDB();

app.listen(3000, () => {
   console.log('Servidor rodando em http://localhost:3000');
});