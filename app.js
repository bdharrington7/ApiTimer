// app.js
var http = require('http');
var express = require('express');
var path = require('path');
var port = 3000;

var app = express();

app.use(express.static(path.join(__dirname, 'assets')));
app.listen(port, function(){console.log('listening on port ' + port)});
