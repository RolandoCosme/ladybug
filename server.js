var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router();
var path = require('path');


var port = process.env.PORT || 8080;

http.listen(port, function(){
  console.log("Magic on Port " + port);
});