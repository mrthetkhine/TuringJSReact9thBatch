const http = require('node:http');
const url = require('node:url');
const path = require('node:path');
const fs = require('node:fs');

function serve(rootDirectory,port)
{
    let server =new http.Server();
    server.listen(port);

    server.on('request',(request,response)=>{
        let endpoint = url.parse(request.url).pathname;
        console.log('endpoint ',endpoint);

        let filename = endpoint.substring(1);
        console.log('filename ',filename );
        filename = filename.replace(/\.\.\//g, "");
        filename = path.resolve(rootDirectory, filename);
        let type = "text/html"; 

        let stream = fs.createReadStream(filename);
        stream.once("readable", () => {
            response.setHeader("Content-Type", type);
            response.writeHead(200);
            stream.pipe(response);

        });
        stream.once("error", (err) => {
            response.setHeader("Content-Type", "text/plain; charset=UTF-8"); 
            response.writeHead(404);
            response.end(err.message);

        });
    });
}
serve('./public',8080);