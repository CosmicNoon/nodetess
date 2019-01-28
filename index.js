var http = require('http');

http.createServer(function (reg, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(4000);