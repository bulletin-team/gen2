const express = require('express');
const fs = require('fs');
const async = require('async');
const app = express();
const SOCKET_PATH = '/tmp/bulletinv2.sock';
const initializer = require('./initializer');
const logger = require('./logger');
const config = require('./config');
const nop = function(){};
initializer(app);

app.get('/', function (req, res) {
  res.render('index.html');
});

fs.unlink(SOCKET_PATH, function (err) {
  app.listen(SOCKET_PATH, 5, function (err) {
    if (err) throw err;
    logger.log('esgeedit');
    fs.chmod(SOCKET_PATH, 0777, nop);
  });
});
