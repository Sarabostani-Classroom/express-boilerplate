var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var tweetRouter = require('./routes/tweet');
const { authCheck } = require('./auth/authCheck')

var app = express();

/* var fun1 = (request, response, next) => {
  console.log(request.method);
  next();
};

var fun2 = (req, res) => {
  res.status(200);
  res.send('Hello express!\n');
}

app.use(fun1);

app.get('/', fun2); */

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', homeRouter);
app.use('/users', authCheck, usersRouter);
app.use('/tweet', tweetRouter);

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
