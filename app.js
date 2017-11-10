require('dotenv').config();

var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    path = require('path'),
    mysql = require('mysql');


app.get('/', function (req, res, next) {
    res.send('Server is working');
});

app.get('/products', function (req, res, next) {
    res.send('Product Page');
});

app.get('/customers', function (req, res, next) {
    res.send('Customer Page');
});

app.listen(3000, function () {
    console.log('server is listening on port ' + port);
});

module.exports = app;
