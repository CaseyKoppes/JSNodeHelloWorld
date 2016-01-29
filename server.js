http = require("http")
cfenv = require("cfenv")

appEnv   = cfenv.getAppEnv()
instances = appEnv.app.instance_index || 0



// create a server with a simple request handler
server = http.createServer(onRequest)

// start the server on the calculated port and host
server.listen(appEnv.port, function() {
    console.log("server starting on " + appEnv.url)
})



//-----------------------------------------------
function onRequest(request, response) 

{ response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<html><body><h1>Hello, World!</h1></body></html>');
}