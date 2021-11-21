// run this file and navigate to
// http://localhost:3000/hello
// in the browser

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200; // the response's status code
    res.statusMessage = 'OK'; // the content of the message
    res.setHeader('Content-Type', 'text/plain'); // add a header to the response

    res.write('Hello, '); // send the first part of the message - the "Hello, " string
    res.write('world!'); // send the second part of the message - the "world!" string

    res.end(); // end the response
});

server.listen(3000);
