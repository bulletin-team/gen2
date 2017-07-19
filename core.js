const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const serveStatic = require('serve-static');
const SOCKET_PATH = '/tmp/bulletinv2.sock';
const logger = {
  log: function (obj) {
    console.log('[' + Date.now() + '] [INFO] ' + path.basename(__filename) + ': ' + obj);
  },
  warn: function (obj) {
    console.log('['+ Date.now() + '] [WARN] ' + path.basename(__filename) + ': ' + obj);
  },
  error: function (obj) {
    console.log('[' +Date.now() + '] [ERROR] ' + path.basename(__filename) + ': ' + obj);
  },
};

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', serveStatic('static'));

app.get('/', function (req, res) {
  res.send(JSON.stringify(req.cookies));
});

fs.unlinkSync(SOCKET_PATH);
app.listen(SOCKET_PATH, 5, function () {
  logger.log('esgeedeet');
});
