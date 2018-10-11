const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(path.join('__DIRNAME','../public')));

io.on('connection',(socket)=>{
	console.log('new user connected');
	socket.on('disconnect',(socket)=>{
	console.log('user disconnected');
});
});

server.listen(port, ()=>{
	console.log(`Listen to port ${port}..`);
});