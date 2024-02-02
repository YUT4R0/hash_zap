const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static("public"));

io.addListener('connection', (socket) => {
  console.log('a user has been connected!');
  socket.addListener('new message', (msg) => {
    io.emit('new message', msg);
  })
})
//IPV4 socket
server.listen(3333, "192.168.1.30");
