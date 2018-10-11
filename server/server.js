const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const {generateMessage} = require('./utils/message');

var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(path.join('__DIRNAME','../public')));

io.on('connection',(socket)=>{
	console.log('new user connected');
	
	socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));
	
	socket.broadcast.emit('newMessage',generateMessage('Admin', 'New user joined'));
	
	socket.on('createMessage', (newMessage)=>{
		console.log('Sended message:', newMessage);
		io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
	});

	socket.on('disconnect',(socket)=>{
	console.log('user disconnected');
	});
});

server.listen(port, ()=>{
	console.log(`Listen to port ${port}..`);
});