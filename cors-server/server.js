var express = require('express');
var app = express();
app.use(express.static('.'));

// const cors = require('cors');
// var corsOptions = {
//     origin: 'http://localhost:8080',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
// app.use(cors(corsOptions));

// preflight
app.options('/getroute', function(req, res) {
  const {headers, method, url} = req; // const headers = req.headers ..etc
  console.log('req.headers', headers);
  console.log('req.method', method);
  console.log('req.url', url);
  // for cors
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  // if request 'withCredentials' then must be header
  res.set('Access-Control-Allow-Credentials', true);
  // if 'not simple request' for preflight requset must be
  res.set('Access-Control-Allow-Methods', 'COPY');
  // and if needed
  res.set('Access-Control-Allow-Headers', 'yo');
  // additional set time, and browser will not make preflight during this period
  res.set('Access-Control-Max-Age', 10000);

  res.status(200).send();
});

// main request
app.copy('/getroute', function(req, res) {
  const {headers, method, url} = req; // const headers = req.headers ..etc
  console.log('req.headers', headers);
  console.log('req.method', method);
  console.log('req.url', url);
  // for cors
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  // if request 'withCredentials' then must be header
  res.set('Access-Control-Allow-Credentials', true);

  res.set('X-Uid', 25555);
  // simple headers (Cache-Control Content-Language Content-Type) wil be sent always
  // specific headers will be sent only if will set explicitly
  res.set('Access-Control-Expose-Headers', 'X-Uid, X-Authentication');

  res.status(200).send('ok8070');
});

// xss
app.all('/xss-grab-token', function(req, res, next) {
  console.log('xss grabbed token', req.query.token);
  res.status(200).send();
});
// xss

app.listen(8070, () => {
  console.log('on port 8070');
});
