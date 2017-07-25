const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const nunjucks = require('nunjucks');
const config = require('./config');

module.exports = function (app) {
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(config.STATIC_VIRTUAL_ROOT, serveStatic(config.STATIC_REAL_ROOT));

  nunjucks.configure(config.TEMPLATES_DIR, {
    autoescape: config.ESCAPE_TPL_OUTPUT,
    express: app,
  });
};
