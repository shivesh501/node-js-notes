// const {Console} = require('console');
const fs = require('fs');

const http = require('http');
const port = process.env.PORT || 3900;
const server = http.createServer((request,response)=>{
    console.log(request.url)
     response.setHeader('Content-type','text/html');
  
    if(request.url === '/about')
    {
         response.statusCode = 200;
    response.end('<h1>this is our http page</h1><p>this is  a paragraph</p>');
    }
    else if(request.url === '/')
    {
        const data = fs.readFileSync('./index.html')
          response.statusCode = 200;
    response.end(data.toString());
    }
    else if(request.url == '/link')
    {
        const data = fs.readFileSync('./Link.html')
        response.statusCode = 200;
        response.end(data);
    }
    else
    {
        response.statusCode = 404;
         response.end('<h1>Page not found</h1>');

    }
    
});

server.listen(port, ()=>{
    console.log("the server is listening on port:",port);
})