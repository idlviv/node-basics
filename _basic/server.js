const http = require('http');
const fs = require('fs');

server = http.createServer((req, res) => {
    console.log('server run');

    //REQUEST

    // The request object is an instance of IncomingMessage.
    // Since the request object is a ReadableStream, 
    // it's also an EventEmitter and behaves like one when an error happens

    const { headers, method, url } = req; // const headers = req.headers ..etc
    console.log('req.headers', headers);
    console.log('req.method', method);
    console.log('req.url', url);
    // It's important to note here that all headers are
    // represented in lower-case only, regardless 
    // of how the client actually sent them

    console.log('req.body', req.body); // post, put

    // An error in the request stream presents itself by emitting an 'error'
    // event on the stream. If you don't have a listener for that event, 
    // the error will be thrown, which could crash your Node.js

    // RESPONSE

    // response object, which is an instance of ServerResponse,
    // which is a WritableStream

    // if not set, the HTTP status code on a response will always be 200

    // *the same
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json');
    // res.setHeader('yo', 'bacon');
    // *the same
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'yo': 'bacon'
      });

    // It's important to set the sttext/htmlatus and headers before you start
    // writing chunks of data to the body. This makes sense, 
    // since headers come before the body in HTTP responses.

    // *the same
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
    // *the same
    // res.write('<html>');
    // res.write('<body>');
    // res.write('<h1>Hello, World!</h1>');
    // res.write('</body>');
    // res.write('</html>');
    // res.write('./index.html');
    // res.end();

});

server.listen(8080, () => {
    console.log('on port 8080');
})