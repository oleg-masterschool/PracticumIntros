// run this file and navigate to
// http://localhost:3000/hello
// in the browser

const http = require('http'); // common Js

const server = http.createServer((req, res) => {
    console.log(req.url); // /hello
    console.log(req.method); // GET
    console.log(req.headers); // the request headers will be here
    // console.log(req.body);
    // console.log(req.url.)
    // console.log((req.body).json()); // and the request body will be here. But the GET request doesn't have it
});

server.listen(3000);
