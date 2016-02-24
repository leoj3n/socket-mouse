var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 5000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

  console.log('Client connected!');

  socket.on('drags', function(coords) {
    io.emit('drags', coords);
  });

  socket.on('drage', function(coords) {
    io.emit('drage', coords);
  });

});
