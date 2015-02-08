// app.js
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var path = require('path');
var io = require('socket.io')(server);
var port = 3000;

io.on('connection', function(socket) {
    console.log('socket.io connected');
    socket.on('request', function(data) {
      console.log('data received: ', data);
      disperseRequests(data);
    });
    socket.on('disconnect', function() {
      console.log('socket.io disconnected');
    })
  }
);

function disperseRequests(datagram) {
  // http

}

app.use(express.static(path.join(__dirname, 'assets')));
server.listen(port, function(){console.log('listening on port ' + port)});
