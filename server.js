const express = require('express');
const app = express();
var path = require('path');
const session = require('express-session');

app.use(session({             //stvaranje sjednice s trajanjem od 1h
  secret: 'namjestaj lab',
  resave: false,
  cookie: {maxAge: 1000 * 60 * 60},
  saveUninitialized: true
}))

const homeRouter = require('./routes/home.routes');     //postavljanje rutera
const cartRouter = require('./routes/cart.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));   

app.use('/', homeRouter);       
app.use('/', cartRouter);

app.listen(3000);
