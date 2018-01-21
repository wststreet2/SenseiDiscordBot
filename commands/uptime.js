module.exports = {
    name: 'uptime',
    description: 'Shows for how long has the bot been running!',
    execute(message, args) {
        const moment = require('moment');
        var totalSeconds = process.uptime();
        var output = moment().seconds(0 - totalSeconds).fromNow();
        message.channel.send("I woke up " + output);
    },
};