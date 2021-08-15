const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../app/build')));

app.get('/api/contacct', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../app/build/index.html'));
  console.log('should see this!')
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});