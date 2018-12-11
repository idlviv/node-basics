const express = require('express');
const app = express();
const session = require('express-session');

app.use(express.static('.'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}));

app.get('/open-session', function(req, res, next) {
  req.session.message = 'Hello World';
  console.log('req.session', req.session);

  res.set('content-type', 'text/json');
  res.status(200).send('ok');
});

// csrf
app.get(
    '/csrf-send-request-from8080-with-grabbed-session-to8060',
    function(req, res, next) {
      // session was opened by this localhost:8060
      // grabbed by localhost:8080
      console.log('session was grabbed', req.session);
      res.status(200).send('ok');
    });
// csrf

app.listen(8060, () => {
  console.log('on port 8060');
});
