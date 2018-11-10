const Discord = require('discord.js');


exports.run = function(client, message, args) {

    var öneri = args.slice(0).join(' ');
    var guildID = "493080803169927179";
    var channelID = "510535513506316350";
    
    if (!öneri){
        return message.reply("Bir mesaj belirtin! Doğru kullanım: **+bildiri <mesaj>**");
    } else {
        
        var embed = new Discord.RichEmbed()
            .setTimestamp()
            .addField("Eylem:", "Öneri")
            .addField("Kullanıcı:", message.author.tag)
            .addField("ID", message.author.id)
            .addField("Öneri/Tavsiye/Hata", öneri)
        
        client.guilds.get(guildID).channels.get(channelID).send(embed);
        message.channel.send("💚 Öneriniz alınmıştır! Teşekkür ederiz.");
    };


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner", "öneri"], 
  permLevel: 0 
};

exports.help = {
  name: 'bildiri', 
  description: "Bot hakkındaki önerilerinizi/tavsiyelerinizi/hataları bot sahibine ulaştırır.", 
  usage: 'bildiri <mesaj>' 
};
