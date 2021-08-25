require('dotenv').config()
var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const cors = require('cors')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var app = express()

const mailer = require('./email')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'build')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/contact', (req, res) => {
  mailer.main(req.body.name, req.body.email, req.body.info)
    .then( response => {
      if (response === 'Fail') {
        res.sendStatus(500)
      } else {
        res.sendStatus(200)
      }
    })
    .catch( err => console.log(err))
})

module.exports = app
