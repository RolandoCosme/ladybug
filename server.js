var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router();
var path = require('path');


var port = process.env.PORT || 8080;

// var app = module.exports = express();
var app = express();

// app.use('/', router);
app.use(express.static('client'));

http.listen(port, function(){
  console.log("Magic on Port " + port);
});