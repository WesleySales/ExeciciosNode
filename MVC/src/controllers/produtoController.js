// const { NOLOCK } = require('sequelize/lib/table-hints');
const Produto = require('../models/produto');

//GET /produtos
exports.listaProdutos= async (req,res) =>{
    const produtos = await Produto.find();
    
    if(!produtos) return res.status(404).send('A lista está vazia')
    res.json(produtos);
};

//GET /produtos/:id
exports.buscarProduto = async (req,res) =>{
    const produto = await Produto.findById(req.params.id);

    if(!produto) return res.status(404).send('Produto nao encontrado')

    res.status(200).send(produto)
}

//POST /produtos/
exports.criarProduto = async (req,res) =>{
    const{nome,preco} = req.body;

    if(!nome || !preco || isNaN(preco)){
        return res.status(400).send('Preencha os campos corretamente')
    }

    const novoProduto = await Produto.create({nome,preco})
    res.status(201).json(novoProduto)
}

//PUT /produtos/:id
exports.editarProduto = async (req,res)=>{
    const produto = await Produto.findById(req.params.id);
    if(!produto) return res.status(404).send('Produto nao encontrado')

    if(!nome || !preco || isNaN(preco)){
        return res.status(400).send('Preencha os campos corretamente')
    }

    produto.update(req.body);
    res.status(200).json(produto)

}

//DELETE /produtos/:id
exports.deletarProduto = async (req,res) =>{
    const produto = await Produto.findById(req.params.id);

    if(!produto) return res.status(404).send('Produto nao encontrado')

    await produto.deleteOne();

    res.status(200).send('Produto deletado com sucesso')
}



