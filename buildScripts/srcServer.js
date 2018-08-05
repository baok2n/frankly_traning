import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, ('../src/index.html')));
  // res.send('Hello World!');
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"First name1","lastName": "Last name1", "email": "email1@gamil.com"},
    {"id": 2,"firstName":"First name2","lastName": "Last name2", "email": "email2@gamil.com"},
    {"id": 3,"firstName":"First name3","lastName": "Last name3", "email": "email3@gamil.com"}
  ]);
});

app.listen(port, (err) => {
  if (err) {
      console.log(err);
  }
  else {
      open('http://localhost:' + port)
  }
});
