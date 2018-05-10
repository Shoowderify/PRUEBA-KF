const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pongoooo!');
  }
});

client.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "$lo0op") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send('@everyone :fire: :lux: Lux Time!!! A darle con todo mis Keyblade Rangers~ :lux: :fire:', {files: ["https://cdn.discordapp.com/attachments/421507243318706188/442339823274033184/BONO_DE_LUX.png"]})
            .catch(console.error); // add error handling here
        }, 1 * 21600000); 
    }
});


client.on('message', msg => {
  if (msg.content === 'NA: Double lux active!') {
     msg.channel.send('@everyone :fire: :lux: Lux Time!!! A darle con todo mis Keyblade Rangers~ :lux: :fire:', {files: ["https://cdn.discordapp.com/attachments/421507243318706188/442339823274033184/BONO_DE_LUX.png"]});
  }
});

galleta1 = "./galletas/galleta1.jpg"; galleta2 = "./galletas/galleta2.jpg";  galleta3 = "./galletas/galleta3.jpg"; 
  if (msg.includes ("!galleta")) {
    number = 3;
    var random = math.floor (math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.send({ files:[galleta1]});
      case 2: message.channel.send({ files:[galleta2]});
      case 3: message.channel.send({ files:[galleta3]});
        }
  }


client.login('NDQzOTAyNjE0ODgzNzk0OTQ1.DdUICg.HynWumr_L-sRAuQkpgosLC_8llQ');
