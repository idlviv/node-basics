const http = require('http');
const fs = require('fs');

server = http.createServer((req, res) => {
    console.log('server run');


    const { headers, method, url } = req; // const headers = req.headers ..etc
    console.log('req.headers', headers);
    console.log('req.method', method);
    console.log('req.url', url);
    console.log('req.body', req.body); // post, put
    
    fs.readFile('./index.html', (err, file) => {
        if (err) {
            throw err; 
        };
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'yo': 'bacon'
        });
        res.write(file);
        res.end();
    });
    


});

server.listen(8080, () => {
    console.log('on port 8080');
})