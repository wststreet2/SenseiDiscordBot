const logger = require('../logger.js');

module.exports = {
  name: 'say',
  description: 'Makes the bot say stuff.',
  execute(message, args) {
    const sayMessage = args.join(" ");
    logger.logs(message.author.username + " made me say \"" + sayMessage + "\"");

    message.delete().catch(O_o => {
      logger.loge(O_o);
    });
    message.channel.send(sayMessage);
  },
};