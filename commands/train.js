const trains = require('../res/emojis.json').trains;

module.exports = {
    name: 'train',
    description: 'Sends one train emoji!',
    execute(message, args) {
        var randomIndex = Math.floor(Math.random() * trains.length);
        message.channel.send(trains[randomIndex]);
    },
};