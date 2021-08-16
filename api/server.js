const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const mailer = require('./email')

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../app/build')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../app/build/index.html'));
});

app.post('/', (req, res) => {
  mailer.main()
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});