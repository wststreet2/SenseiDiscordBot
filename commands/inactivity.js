var util = require('../util.js');
var moment = require('moment');
const logger = require('../logger.js');

module.exports = {
    name: 'inactivity',
    description: 'List inactive users!',
    requiresAdmin: true,
    execute(message, args) {
        var output = "";
        var validMembers = message.guild.members.filter(member => {
            if (member.user.bot) { return false; }
            else if (util.isAdmin(message.guild.roles, member.user)) { return false; }
            else return true;
        });

        logger.logd(message.channel.messages.size);

        message.channel.send("Not Implemented");
    },
};