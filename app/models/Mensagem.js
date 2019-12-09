const mongoose = require('mongoose'); 

const mensagemSchema = new mongoose.Schema({
    nome: {
        type: String, 
        required: true, 
    }, 
    contato: {
        type: String, 
        required: true, 
    }, 
    msg: {
        type: String, 
        required: true
    }
}, 
    {
        timestamps: true
    }
); 

mongoose.model('Mensagem', mensagemSchema)