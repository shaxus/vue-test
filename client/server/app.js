var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
<<<<<<< HEAD
var cookieParser = require('cookie-parser');
=======
// var cookieParser = require('cookie-parser');
>>>>>>> 886d5e58598e7df8a8d21bd432934bc094ac0d5b
var logger = require('morgan');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const product = require('./routes/product.route'); // Imports routes for the products

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
<<<<<<< HEAD
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
=======
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
>>>>>>> 886d5e58598e7df8a8d21bd432934bc094ac0d5b

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', product);
// app.get('/products/:id', cors(), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for a Single Route'})
// })

// Set up mongoose connection
<<<<<<< HEAD
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/movielist/';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
=======
// const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://localhost:27017/movielist';
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
>>>>>>> 886d5e58598e7df8a8d21bd432934bc094ac0d5b

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
