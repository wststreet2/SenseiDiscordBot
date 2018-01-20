const logger = require('../logger.js');

exports.run = function (client, message, args) {
    const sayMessage = args.join(" ");
    logger.logs(message.author.username + " made me say \"" + sayMessage + "\"");

    message.delete().catch(O_o => {
      logger.loge(O_o);
    });
    message.channel.send(sayMessage);
}