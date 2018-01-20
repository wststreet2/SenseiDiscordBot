const trains = require('../res/emojis.json').trains;

module.exports = {
    name: 'tslots',
    description: 'Slots game, with trains!',
    execute(message, args) {

        var s1 = Math.floor(Math.random() * trains.length);
        var s2 = Math.floor(Math.random() * trains.length);
        var s3 = Math.floor(Math.random() * trains.length);

        var output = "";
        var cheat = args[0] != null && args[0] == 'cheat';

        if (cheat) {
            output += "CHOOOOOO! Winner! Congrats " + message.author + ", you f\\*\\*\\*ing cheater...";
        } else if (s1 == s2 && s2 == s3) {
            output += "CHOOOOOO! Winner! Congrats " + message.author;
        } else if (s1 != s2 && s2 != s3 && s1 != s3) {
            output += "Better luck next time.";
        } else {
            output += "So close...";
        }

        output += "\n";

        if (cheat) {
            output += "**[** " + trains[s1] + " " + trains[s1] + " " + trains[s1] + " **]**";
        }
        else {
            output += "**[** " + trains[s1] + " " + trains[s2] + " " + trains[s3] + " **]**";
        }

        message.channel.send(output);

    },
};
