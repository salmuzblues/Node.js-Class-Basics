
// create module http
var http = require('http');
var module2 = require('./module2');

/*
--------ONE WAY -----
// method for showing on the web

function onRequest ( request, response ){

    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write(module2.Variable); // this appears into my web, and it was called from another module
    module2.myFunction();
    response.end();
};

// specify the port
http.createServer(onRequest).listen(8000);

*/

// ANOTHER WAY
// method for showing on the web
// Inside the server we create function.

http.createServer(function ( request, response ){

    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write(module2.Variable); // this appears into my web, and it was called from another module
    module2.myFunction();
    response.end();
}).listen(8000);

