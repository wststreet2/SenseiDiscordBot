var util = require('../util.js');

module.exports = {
    name: 'admintest',
    description: 'Brag about being the owner of the bot!',
    requiresAdmin: true,
    execute(message, args) {
        message.channel.send('Yes, master!');
    },
};