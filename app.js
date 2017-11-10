require('dotenv').config();

var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    path = require('path'),
    mysql = require('mysql');


app.get('/', function (req, res, next) {
    res.send('Server is working');
});

app.listen(3000, function () {
    console.log('server is listening on port ' + port);
});

module.exports = app;
