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

app.get('/ses', function(req, res, next) {
  console.log('req.session', req.session);
  res.set('content-type', 'text/json');
  res.status(200).send('ok');
});

app.listen(8060, () => {
  console.log('on port 8060');
});
