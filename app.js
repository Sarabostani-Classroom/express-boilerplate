const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const Post = require('./models/postModel')
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');
const { authCheck } = require('./auth/authCheck');
const { json } = require('express');
const mongoose = require('mongoose');


mongoose.
connect('mongodb+srv://admin:1234567Admin@tweeterapi.77aizmj.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log(error)
})



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', homeRouter);
app.use('/users', authCheck, usersRouter);
app.use('/posts', postsRouter);
app.use('/auth', authRouter);

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

app.post('/post', async(req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json(post);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
    }
})



module.exports = app;
