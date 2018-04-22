var express = require('express'),
    router = require('./routes/routes.js'),
    path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', router);

module.exports=app;