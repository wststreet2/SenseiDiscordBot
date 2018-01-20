
exports.run = async function (client, message, args) {
    const m = await message.channel.send("Ping?");
    // Copy paste, pray it works
    // await requires 'async' for some reason
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms.
      API Latency is ${Math.round(client.ping)}ms`);
}