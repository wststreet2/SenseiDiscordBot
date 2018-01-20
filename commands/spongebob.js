module.exports = {
    name: 'spongebob',
    description: 'genErAteS teXt lIke This!',
    execute(message, args) {
        var inputStr = args.join(" ");
        var outputStr = "";
        for (var i = 0, len = inputStr.length; i < len; i++) {
            if (Math.random() >= 0.5) {
                outputStr = outputStr + inputStr.charAt(i).toUpperCase();
            } else {
                outputStr = outputStr + inputStr.charAt(i).toLowerCase();
            }
        }
    
        message.channel.send(outputStr);
    },
};