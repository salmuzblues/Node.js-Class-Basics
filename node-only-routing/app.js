
// variable modules

var fs = require('fs');
var url = require('url');
// function to make the server.
function renderHtml (path, response){

    response.writeHead(200, {'Content-type': 'text/html'});
    //The fs.readFile() method is used to read files on your computer.
    fs.readFile(path , null, function (err, data) {
        if(err){
            response.writeHead(404);
            response.write('File not found');
        }else {
            response.write(data);
        }
        response.end();
    });
}
// main Handle all request
module.exports = {
  
   handleRequest: function (request, response) {

       response.writeHead(200, {'Content-type': 'Text/html'});

       // this is going to catch th url
       var path = url.parse(request.url).pathname;
       // calling the path by Switch
       switch (path){
           case '/':
               renderHtml('./index.html',response); break;
           case '/login':
               renderHtml('./login.html', response); break;
           default:
               response.writeHead(404);
               response.write('Route not defined');
               response.end();
       }
   }
}