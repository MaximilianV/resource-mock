var express = require('express');
var app = express();
var resources = require('./routes/resources.js')

app.get('/', function (req, res) {
  res.send('Look at /resources!');
});

app.use('/resources', resources);

app.listen(3500, function () {
  console.log('Resource-mock listening on port 3500!');
});