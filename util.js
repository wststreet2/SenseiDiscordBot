const logger = require('./logger.js');

exports.setGame = function (client) {
  var members = 0;
  client.guilds.forEach(guild => {
    members += guild.members.size;
  });

  client.user.setActivity(members + ' students.', { type: "WATCHING" });
  logger.logd('teacher for ' + members + ' students.');
}


exports.contains = function (value, searchFor) {
  return (value || '').indexOf(searchFor) > -1;
}

exports.getOwnerId = function () { return '132517228670091264'; }

exports.isAdmin = function (roles, member) {
  return roles.filter(role => { return role.hasPermission('ADMINISTRATOR'); })
    .some(role => { return role.members.has(member.id); });
}

exports.hasPermission = function (roles, member, permission) {
  return roles.filter(role => { return role.hasPermission(permission); })
    .some(role => { return role.members.has(member.id); });
}

var lastPicTime = 0;
var lastVidTime = 0;
exports.picspam = function (message) {
  if (message.guild.id == '293373375475220480') {

    if (!(message.channel.id == '304150184093417472' ||
      message.channel.id == '304215787487625236' ||
      message.channel.id == '304215835864465409' ||
      message.channel.id == '360480578098954253' ||
      message.channel.id == '372702012212510730')) {

      var picExtRegex = new RegExp('http[^\\s]+(\\.png|\\.jpg|\\.gif)');

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

exports.dadJoke = function (message) {

  if (message.content.length < 25 && message.channel.id != '314759368749088769') {
    var content = message.content.replace('’', '\'').replace('`', '\'');

    if (Math.random() >= 0.5) return;

    if (content.toLowerCase().startsWith('im ')) {
      var name = content.slice('Im '.length).trim();
      name = name.toLowerCase().replace('i\'m', '').replace('i am', '').replace('im', '');
      message.channel.send('Hello, ' + name + '. I\'m Sensei.');
    }

    if (content.toLowerCase().startsWith('i\'m ')) {
      var name = content.slice('I\'m '.length).trim();
      name = name.toLowerCase().replace('i\'m', '').replace('i am', '').replace('im', '');
      message.channel.send('Hello, ' + name + '. I\'m Sensei.');
    }

    if (content.toLowerCase().startsWith('i am ')) {
      var name = content.slice('I am '.length).trim();
      name = name.toLowerCase().replace('i\'m', '').replace('i am', '').replace('im', '');
      message.channel.send('Hello, ' + name + '. I\'m Sensei.');
    }
  }
}

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

function checkMoji(str) {
  var mojiRegex = new RegExp('(\\s*<a*:.*:\\d+>\\s*)*');
  var mojiStrippedMessage = str.replace(mojiRegex, "");

  return isEmptyOrSpaces(mojiStrippedMessage);
}

exports.mojispam = function (message) {
  if (message.guild.id == '293373375475220480') {

    if (message.channel.id != '304150184093417472') {
      var count = 0;

      if (checkMoji(message.content)) {
        var channel = typeof TextChannel
        channel = message.channel;
        channel.fetchMessages({ limit: 4 }).then(
          messages => {
            messages.array().forEach(m => {
              if (checkMoji(m.content)) {
                count++;
                if (count >= 4) {
                  message.channel.send("Please do not spam emoji in this channel, thank you!");
                  return;
                }
              }
            });
          }
        );
      }
    }
  }
}