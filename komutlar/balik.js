const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Balık Tuttun Balığı Çekiyorsun..').then(message => {
   var baliklar = [' Sazan Tuttun! 🐟' ,' Sazan Tuttun! 🐟' ,' Köpek Balığı Tuttun 🐟' ,' Uskumru Tuttun! 🐟' ,' Uskumru Tuttun! 🐟' ,' Mezgit Tuttun! 🐟' ,' Mezgit Tuttun! 🐟' ,' Japon Balığı Tuttun ! 🐟' ,' Japon Balığı Tuttun ! 🐟' ,' Hamsi Tuttun! 🐟' ,' Hamsi Tuttun! 🐟' ,' Levrek Tuttun! 🐟' ,' Levrek Tuttun! 🐟' ,'Hiçbirşey Tutamadın Maalesef! 🗑' ,' Alabalık Tuttun! 🐟' ,' Alabalık Tuttun! 🐟' ,'Maalesef Balık Oltadan Kaçtı! 🗑' ,' İstavrit Tuttun! 🐟',' İstavrit Tuttun! 🐟'];
      var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
            message.edit(`${balik}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balık', 'balıktut', 'balık-tut'],
  permLevel: 0
};

exports.help = {
  name: 'balıktut',
  description: 'Balık Tutarsın.',
  usage: 'balıktut'
};