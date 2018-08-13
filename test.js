var fs = require('fs');
var mentions = JSON.parse(fs.readFileSync('./lines.json', 'utf8'));
console.log(mentions.mentions);
