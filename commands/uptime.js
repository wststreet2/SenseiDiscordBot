
exports.run = function (client, message) {
    const moment = require('moment');
    var totalSeconds = process.uptime();
    var output = moment().seconds(0 - totalSeconds).fromNow();
    message.channel.send("I woke up " + output);
}