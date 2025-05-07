const mongoose = require("mongoose")

const conectarDB = async ()=>{
    try{
        
        await mongoose.connect('mongodb+srv://wsales:Sales1226@cluster0.fj9syaa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('MongoDb conectado')
    } catch (erro){
        console.error('Erro ao conectar no mongoDB: ', error)
    }
}

module.exports = conectarDB;