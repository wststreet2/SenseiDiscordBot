var util = require('../util.js');

module.exports = {
    name: 'admintest',
    description: 'Brag about being the owner of the bot!',
    execute(message, args) {
        if (message.author.id === Util.getOwnerId()) {
            message.channel.send('Yes, master!');
        } else {
            message.channel.send('You are not my master!');
        }
    },
};