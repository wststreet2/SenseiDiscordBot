
const whys = require('../res/why.json').whys;
module.exports = {
    name: 'why',
    description: 'Prints a random google search starting with \"why\"!',
    execute(message, args) {
        var randomIndex = Math.floor(Math.random() * whys.length);
        message.channel.send(whys[randomIndex] + "?");
    },
};