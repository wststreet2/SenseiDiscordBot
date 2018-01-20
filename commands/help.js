
exports.run = function (client, message, args) {
  var output = "Command list:\n" +
               "s:help - prints this list\n" +
               "s:ping - shows the bot's latency\n" +
               "s:say - makes the bot say stuff\n" +
               "s:schoolgirllewds - shows a random lewd schoolgirl picture [NSFW]\n" +
               "s:spongebob <text> - genErAteS teXt lIke This\n" +
               "s:train - sends one train emoji\n" +
               "s:tslots - slots game\n" + 
               "s:uptime - shows for how long has the bot been running\n" +
               "s:why - asks a why question\n";
  message.channel.send(output);
}