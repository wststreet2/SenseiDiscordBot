module.exports = {
    name: 'slog',
    description: 'Sends you the log files!',
    execute(message, args) {
        if (message.author.id === Util.getOwnerId()) {
            message.channel.send('Yes, master!');
        } else {
            message.author.sendFile('../debugS.log');
        }
    },
};