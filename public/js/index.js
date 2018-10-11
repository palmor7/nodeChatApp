var socket = io();

socket.on('connect', function(){
	console.log('connected to server');
	socket.emit('createEmail', {
		to: 'giorgos@lol/gr',
		text: 'ti kaneis re mlk ?' 
	});
	socket.emit('createMessage', {
		from: 'nikos',
		text: 'ola kala re trele mou ?' 
	});
});

	

socket.on('disconnect', function(){
	console.log('disconnected from server');
});

socket.on('newEmail', function(email){
	console.log('New email', email);
});

socket.on('newMessage', function(newMessage){
	console.log('New message', newMessage);
});