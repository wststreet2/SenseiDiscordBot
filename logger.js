const moment = require('moment');
const fs = require('fs');

exports.logv = function (message) { log(message, 'V'); }
exports.logd = function (message) { log(message, 'D'); }
exports.logi = function (message) { log(message, 'I'); }
exports.logw = function (message) { log(message, 'W'); }
exports.loge = function (message) { log(message, 'E'); }
exports.logs = function (message) { logs(message); }

function log(message, severity) {
  var output = severity + " [" + moment().format("HH:mm:ss") + "] " + message;
  console.log(output);
  var log_file = fs.createWriteStream(__dirname + '/debug.log', { flags: 'a+' });
  log_file.write(output + '\r\n');
}

function logs(message) {
  var output = "S [" + moment().format("HH:mm:ss") + "] " + message;
  console.log(output);
  var log_file = fs.createWriteStream(__dirname + '/debugS.log', { flags: 'a+' });
  log_file.write(output + '\r\n');
}
