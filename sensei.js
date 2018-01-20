// Discord
const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();

// External
const util = require('./util.js');
const logger = require('./logger.js');

// Commands
const help = require('./commands/help.js').run;
const ping = require('./commands/ping.js').run;
const say = require('./commands/say.js').run;
const spongebob = require('./commands/spongebob.js').run;
const train = require('./commands/train.js').run;
const tslots = require('./commands/tslots.js').run;
const uptime = require('./commands/uptime.js').run;
const why = require('./commands/why.js').run;

// Constants

client.on('message', message => {

  // Ignore messages from bots
  if (message.author.bot) return;

  // Ignore DMs
  if (typeof message.channel !== 'TextChannel') return; 

  // Reply if mentioned
  if (message.mentions.members && message.mentions.members.has(client.user.id)) {
    var mentionLines = require('./lines.json').mention;
    var randomIndex = Math.floor(Math.random() * mentionLines.length);
    message.channel.send(mentionLines[randomIndex]);
  }

  //afghanistan(message);
  picspam(message);

  // Ignore messages without the prefix
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  switch (command) {
    case 'help': help(client, message); break;
    case 'ping': ping(client, message); break;
    case 'say': say(client, message, args); break;
    case 'schoolgirllewds': message.channel.send("Perv..."); break;
    case 'spongebob': spongebob(client, message, args); break;
    case 'train': train(client, message); break;
    case 'tslots': tslots(client, message, args); break;
    case 'uptime': uptime(client, message); break;
    case 'why': why(client, message); break;
  }

  if (message.author.id == '132517228670091264') {
    switch (command) {
      case 'admintest': message.channel.send('Yes, master!');
      case 'sslog': message.author.sendFile('./debugS.log');
    }
  }
});

function contains(value, searchFor) {
  return (value || '').indexOf(searchFor) > -1;
}

function afghanistan(message) {
  var reg = new RegExp('train.*afghanistan');
  var lowCaseContent = message.content.toLowerCase('train.*afghanistan');
  var regResult = reg.exec(lowCaseContent);
  if (regResult != null && regResult.length > 0) {
    if (!contains(lowCaseContent, 'do not') &&
      !contains(lowCaseContent, 'dont') &&
      !contains(lowCaseContent, 'don\'t')) {
      message.channel.send(message.author + " .... you're an idiot.");
    }
  }
}

var lastPicTime = 0;
var lastVidTime = 0;
function picspam(message) {
  if (message.guild.id == '293373375475220480') {

    if (!(message.channel.id == '304150184093417472' ||
      message.channel.id == '304215787487625236' ||
      message.channel.id == '304215835864465409')) {

      var picExtRegex = new RegExp('\\.png|\\.jpg|\\.gif');

      if (message.attachments.some(value => { return value.width > 0; }) ||
        picExtRegex.exec(message.content)) {
        if ((new Date().getTime() - lastPicTime) < 3600000) {
          logger.logi(message.author + " in " + message.channel);
          message.channel.send(message.author + " please keep images in the appropriate channels.");
        }
        lastPicTime = new Date().getTime();
      }
    }

    var youtubeRegex = new RegExp('https*:\\/\\/(www.)*youtu\\.*be(\\.be)*(\\.com)*\\/');

    if (!(message.channel.id == '306072408098603010' ||
      message.channel.id == '304150184093417472')) {
      if (youtubeRegex.exec(message.content)) {
        if ((new Date().getTime() - lastVidTime) < 3600000) {
          logger.logi(message.author + " in " + message.channel);
          message.channel.send(message.author + " please keep videos in the appropriate channels.");
        }
        lastVidTime = new Date().getTime();
      }
    }
  }
}

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

