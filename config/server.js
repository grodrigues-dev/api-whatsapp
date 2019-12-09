const express = require('express'); 
const appExpress = express(); 
const consign = require('consign');

appExpress.set('view engine', 'ejs' );

appExpress.set('views', './app/views'); 

consign()
    .include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .then('app/controllers')
    .into(appExpress);

module.exports = appExpress; 