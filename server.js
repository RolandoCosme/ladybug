var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router();
var logger = require('morgan');
var nodemailer = require('nodemailer');

var PORT = process.env.NODE_ENV || 8080;


app.use(logger ( 'dev' ));
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log("Listening on " + PORT);
});
