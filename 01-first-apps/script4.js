
// Making a server

var http = require('http'); // http is a module
// create a server
var server = http.createServer(engine);

//port for listener
server.listen(1337, function () {
    console.log('Server was hit by a request');
});
// this method is for showing the message on screen
function engine (request, response){
    response.writeHead(200, {'Content-type':'text/plain'});
    response.end('Hey there, this is the server! Request from page: ' + request.url);
}

