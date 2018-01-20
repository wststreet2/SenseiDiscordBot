
const whys = require('./why.json').whys;

exports.run = function(client, message) {
    var randomIndex = Math.floor(Math.random() * whys.length);
    message.channel.send(whys[randomIndex] + "?");
}