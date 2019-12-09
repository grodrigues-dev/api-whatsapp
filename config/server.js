const express = require('express'); 
const appExpress = express(); 
const consign = require('consign');
const mongoose = require('mongoose')

appExpress.set('view engine', 'ejs' );

appExpress.set('views', './app/views'); 

mongoose.connect('mongodb://localhost:27017/mensagens', {useNewUrlParser: true}); 

consign()
    .include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .then('app/controllers')
    .into(appExpress);

module.exports = appExpress; 