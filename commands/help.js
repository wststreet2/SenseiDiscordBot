

module.exports = {
  name: 'help',
  description: 'Prints help list',
  execute(message, args) {
    var output = "```";
    const fs = require('fs');
    const commandFiles = fs.readdirSync('./commands');
    for (const file of commandFiles) {
      const command = require(`./${file}`);
      output += command.name + ": " + command.description + "\n";
    }
    output += "```";

    message.channel.send(output);
  },
};