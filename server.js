var express = require('express');
var app = express();
var cors = require('cors')
var resources = require('./routes/resources.js')
var methods = require('./routes/methods.js')

app.use(cors());

app.get('/', function (req, res) {
  res.send('Look at /resources!');
});

app.use('/resources', resources);

app.use('/methods', methods);

app.listen(3500, function () {
  console.log('Resource-mock listening on port 3500!');
});