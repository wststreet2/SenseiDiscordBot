
// Discord
const Discord = require('discord.js');
const config = require("./config.json");
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();

// External
const util = require('./util.js');
const logger = require('./logger.js');

// Commands new
const commandFiles = fs.readdirSync('./commands');
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Constants

client.on('message', message => {

  // Ignore messages from bots
  if (message.author.bot) return;

  // Ignore DMs
  if (!(message.channel instanceof Discord.TextChannel)) return;

  // Reply if mentioned
  if (message.mentions.members && message.mentions.members.has(client.user.id)) {
    var mentionLines = require('./lines.json').mention;
    var randomIndex = Math.floor(Math.random() * mentionLines.length);
    message.channel.send(mentionLines[randomIndex]);
  }

  util.picspam(message);

  // Ignore messages without the prefix
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    var commandObj = client.commands.get(command)
    if (commandObj.requiresAdmin) {
      if (util.isAdmin(message.guild.roles, message.author)) {
        commandObj.execute(message, args);
      } else {
        message.channel.send(message.author + ', Insufficient privileges.');
      }
    } else {
      commandObj.execute(message, args);
    }
  }
  catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

client.on('messageDelete', message => {
  logger.logs(message.author + "(" + message.author.username + ")" + " deleted message: " + message);
});

client.on('ready', () => {
  logger.logi('I am ready!');
  util.setGame(client);
});

client.on('guildCreate', guild => {
  logger.logi('Joined Guild: ' + guild.name);
  util.setGame(client);
});

client.on('guildDelete', guild => {
  logger.logi('Left Guild: ' + guild.name);
  util.setGame(client);
});

client.on('guildMemberAdd', member => {
  util.setGame(client);
});

client.on('guildMemberRemove', member => {
  util.setGame(client);
});

client.login(config.token);

