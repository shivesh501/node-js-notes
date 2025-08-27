//import the http package
const http = require('http');
//specify the port number
const port = process.env.PORT || 3900;//if PORT is not defined then use 3900
//create the http server
const server = http.createServer((req,res)=>{
    res.statusCode = 200;//read about http response codes, 200 means ok
    res.setHeader('Content-type','text-html'); // tells the browser to parse the content as an html otherwise it would treat it like plaintext
    res.end("<h1>This is our http</h1><p>this is a paragraph</p>");

})

server.listen(port, ()=>{
    console.log(`the server is listening on port: ${port}`);
});

