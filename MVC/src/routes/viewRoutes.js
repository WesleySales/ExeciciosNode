const express = require('express')
const router = express.Router()
const Produto = require('../models/produto')

router.get('/', async (req,res)=>{
    try {
        const produtos = await Produto.find();
        res.render('index', {produtos})
    } catch (error) {
        res.status(500).send("Erro ao carregar produtos")
    }
    
})

module.exports=router;