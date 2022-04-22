var http = require("http");

var fs = require("fs");
function onRequest(request, response) {
    console.log("hiiiii")
    response.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(400);
            response.write('file not found')
        }
        else {
            response.write(data)

        }
        response.end()
    })
}
http.createServer(onRequest).listen(8000)