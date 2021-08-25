require('dotenv').config()
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
const cors = require('cors')

var indexRouter = require('./routes/index')

var app = express()

const PORT = process.env.PORT || 5000;
const mailer = require('./email')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'build')))

app.use('/', indexRouter)

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
