var util = require('../util.js');

module.exports = {
    name: 'admintest',
    description: 'Brag about being the owner of the bot!',
    execute(message, args) {
        if (util.isAdmin(message.guild.roles, message.author)) {
            message.channel.send('Yes, master!');
        } else {
            message.channel.send('You are not my master!');
        }
    },
};