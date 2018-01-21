var util = require('../util.js');

module.exports = {
    name: 'slog',
    description: 'Sends you the log files!',
    requiresAdmin: true,
    execute(message, args) {
        if (message.author.id === util.getOwnerId()) {
            message.author.sendFile('./debugS.log');
        } else {
            message.channel.send('Only the owner can use that command.');
        }
    },
};