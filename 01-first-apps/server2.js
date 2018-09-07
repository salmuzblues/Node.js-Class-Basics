
// create module http
var http = require('http');

// method for showing on the web

function onRequest ( request, response ){

    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('hello world alex into a server');
    response.end();
};

// specify the port
 http.createServer(onRequest).listen(8000);