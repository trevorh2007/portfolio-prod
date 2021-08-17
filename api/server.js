require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express(),
      port = 3080;
const cors = require('cors')

const mailer = require('./email')

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
app.use(express.static(path.join(__dirname, '../app/build')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../app/build/index.html'));
});

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
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});