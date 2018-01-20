var util = require('../util.js');

module.exports = {
    name: 'slog',
    description: 'Sends you the log files!',
    execute(message, args) {
        if (message.author.id === util.getOwnerId()) {
            message.author.sendFile('./debugS.log');
        } else {
            message.channel.send('Nice try.');
        }
    },
};