const express = require('express');
const path = require('path');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join('__DIRNAME','../public')));

app.listen(port, ()=>{
	console.log(`Listen to port ${port}..`);
});