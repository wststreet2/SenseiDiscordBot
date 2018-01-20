
const trains = require('./emojis.json').trains;

exports.run = function(client, message) {
    var randomIndex = Math.floor(Math.random() * trains.length);
    message.channel.send(trains[randomIndex]);
}