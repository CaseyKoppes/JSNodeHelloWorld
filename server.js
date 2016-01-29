var http = require('http');

http.createServer(function(request, response) 
{ response.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><body><h1>Hello, World</h1></body></html>');
}).listen(process.env.VCAP_APP_PORT);
