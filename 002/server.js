const http = require('http');
// const fs = require('fs');

var static = require('node-static');
 
//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('.');
server = http.createServer((req, res) => {
    console.log('server run');


//     const { headers, method, url } = req; // const headers = req.headers ..etc
//     console.log('req.headers', headers);
//     console.log('req.method', method);
//     console.log('req.url', url);
//     console.log('req.body', req.body); // post, put
    req.addListener('end', function () {
        fs.readFile('./index.html', (err, file) => {
            if (err) {
                throw err; 
            };
            file.serve(req, res);
        });
        
    }).resume();
   

//     routs
    

});

// function routs(req, res) {
//     if (req.routs === 'getroute') {

//         res.writeHead(200, {
//             'Content-Type': 'text/json',
//         });
//         res.end('ok');
        
//     } else {
//         res.end('not ok');
//     }

// }

server.listen(8080, () => {
    console.log('on port 8080');
})


