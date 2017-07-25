exports.log = function (obj) {
  console.log('[' + (new Date()).toISOString() + '] [INFO] ' + obj);
};
exports.warn = function (obj) {
  console.log('['+ (new Date()).toISOString() + '] [WARN] ' + obj);
};
exports.error = function (obj) {
  console.log('[' +(new Date()).toISOString() + '] [ERROR] ' + obj);
};
