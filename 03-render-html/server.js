
// create module http
var http = require('http');
// Insert module File System;
// The Node.js file system module allows you to work with the file system on your computer.
var fs  = require('fs');

// method for showing on the web

function onRequest ( request, response ){

    response.writeHead(200, {'Content-type': 'text/html'});
    //The fs.readFile() method is used to read files on your computer.
    fs.readFile('./index.html', null, function (err, data) {
        if(err){
            response.writeHead(404);
            response.write('File not found');
        }else {
            response.write(data);
        }
        response.end();
    });
}

// specify the port
http.createServer(onRequest).listen(8000);