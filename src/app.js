var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function (request, response)  {
    response.render('index');
});



module.exports = app;