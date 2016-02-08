///My Main File
//Pulling module and creating a variable to hold the function express
var express = require('express');
var app = express();


app.get('/', function (req,res) {
	var o = {
		msg: "Hello from node (JSON)"
	}
	res.type(application/json)
	res.send(JSON.stringify(o));
});

app.get('/index.html', function (req,res) {
	res.type('png');
	res.send("<html><body><h1>Hello</h1><h2>There</h2><h3>Cole!</h3></body></html>");
});

//app.listen is currently listening to the port 3000 for a responce.
app.listen(3000, function(){
	console.log('Examine app listening to port 3000');
});