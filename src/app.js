const express = require('express');
const app = express();
const path = require('path');

var publicPath = path.join(__dirname, '/client'); 

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(publicPath));
app.use(require('./controllers/authController'));



module.exports = app;