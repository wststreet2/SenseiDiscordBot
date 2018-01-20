const logger = require('./logger.js');

exports.setGame = function (client) {
  var members = 0;
  client.guilds.forEach(guild => {
    members += guild.members.size;
  });

  client.user.setActivity(members + ' students.', {type: "WATCHING"});
  logger.logd('teacher for ' + members + ' students.');
}
