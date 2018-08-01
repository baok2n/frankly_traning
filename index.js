const express = require('express');
const path = require('path');
const open = require('open');
const app = express();
var err;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, ('index.html')));
  // res.send('Hello World!');
});

app.listen(3000, err, () => {
  if (err) {
      console.log(err);
  }
  else {
      open('http://localhost:3000')
  }
});