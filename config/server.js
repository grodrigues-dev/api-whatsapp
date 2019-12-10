const express = require('express'); 
const appExpress = express(); 
const consign = require('consign');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser')
require('dotenv/config'); 

appExpress.set('view engine', 'ejs' );

appExpress.set('views', './app/views'); 

appExpress.use(bodyParser.urlencoded({extended: true}));

mongoose.connect( process.env.MONGOCONNECT, {useNewUrlParser: true}); 

consign()
    .include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .then('app/controllers')
    .into(appExpress);

module.exports = appExpress; 