var util = require('../util.js');
var prefix = require('../config.json').prefix;

module.exports = {
  name: 'help',
  description: 'Prints help list',
  execute(message, args) {
    var output = "";
    const fs = require('fs');
    const commandFiles = fs.readdirSync('./commands');

    output += "__User Commands:__\n\n";
    for (const file of commandFiles) {
      const command = require(`./${file}`);

      if (!command.requiresAdmin) {
        output += "`" + prefix + command.name + "`\t " + command.description + "\n";
      }
    }

    if (util.isAdmin(message.guild.roles, message.author)) {
      output += "\n__Admin Commands:__\n\n"

      for (const file of commandFiles) {
        const command = require(`./${file}`);
  
        if (command.requiresAdmin) {
          output += "`" + prefix + command.name + "`\t " + command.description + "\n";
        }
      }
    }

    output += "";

    message.channel.send(output);
  },
};