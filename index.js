const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == 'damn'){
        message.react(':thinking:');
        message.react(':damn:516704474757070859');
    }
});

bot.login('NTE3MTQ5MjY1MjUzMTA1Njg0.Dt-Auw.cZ0wEctvKVVZ8nLDHCc9FcdXNS4');
