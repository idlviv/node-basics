var express = require('express');
var app = express();

app.use(express.static('.'));
 
app.get('/getroute', function (req, res) {
    res.status(200).send('ok');
  });

// app.get('/', function (req, res) {
// res.writeHead(200, {
//     'Content-Type': 'text/json',
// });
// res.end('otk');
// });

app.listen(8080, () => {
    console.log('on port 8080');
});
