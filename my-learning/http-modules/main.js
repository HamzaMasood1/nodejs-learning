var http = require('http');

var dt = require('./myDateTime')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("The date and time are crurently: " + dt.myDateTime() + '\n')
    res.end('Hello World!');
}).listen(8080);

