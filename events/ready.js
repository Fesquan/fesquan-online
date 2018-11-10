const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('Bot çalışmaya hazır ve çalıştı!')  

    var Games = [
       
        "🎉v!davet | Botumuzu Ekleyin!",
      
        "🔥7/24 Aktif BOT",

        `🌍${client.guilds.size} Sunucu !`,

        `👥${client.users.size} Kullanıcı !`,
        
        `🌀v!bildiri ! bize öneriler yazın`,
      
   
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/fesquan");
        }, 2 * 2500);

}; 
