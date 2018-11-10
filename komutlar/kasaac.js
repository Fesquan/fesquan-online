const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('CS:GO Kasa Açılıyor !').then(message => {
    var silahlar = ['**AK-47 | Jaguar** Çıkarttın !','**AK-47 | Express** Çıkarttın !','**AK-47 | Neon Yağmuru** Çıkarttın !','**Karambit | Ototronik** Çıkarttın !','**M9 Bayonet | Gece** Çıkarttın !','**M9 Bayonet | Lore** Çıkarttın !','**Nova | Ceviz** Çıkarttın !','**Çift Beretta | Yıkım ** Çıkarttın !','**AWP | Asiimow** Çıkarttın !','**M4A1-S | Süvari** Çıkarttın !','**USP-S | Kraliyet Mavisi** Çıkarttın !','**Tec-9 | Toxic** Çıkarttın !','**Negev | Nükleer Atık** Çıkarttın !','**MAC-10 | Gümüş** Çıkarttın !','**UMP-45 | Karbon Fiber** Çıkarttın !','**Desert Eagle | Pilot** Çıkarttın !','**Glock-18 | Solgun** Çıkarttın !','**MP9 | Buldozer** Çıkarttın !','**AWP | Bilgin Ejderha** Çıkarttın !','**AWP | Medusa** Çıkarttın !','**Glock-18 | Elma Şekeri** Çıkarttın !','**M4A1-S | Şaheser** Çıkarttın ! ','**USP-S | Kaza Çizikleri** Çıkarttın ! ','**CZ75-Otomatik | Nitro** Çıkarttın !','**Desert Eagle | Şehir DDPAT** Çıkarttın !','**Desert Eagle | Ateş** Çıkarttın !','**Karambit | Mazi** Çıkarttın','**M9 Bayonet | Solgun** Çıkartttın !','**AUG | Sıcak Güç** Çıkarttın !'];
      var silah = silahlar[Math.floor(Math.random() * silahlar.length)];
            message.edit(`${silah}`);
 });
  }

  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kasa', 'csgo-kasa', 'kasaç'],
  permLevel: 0
};

exports.help = {
  name: 'kasaaç',
  description: 'CS:GO kasası açarsın',
  usage: 'kasaaç'
};

   // Credit ; MasterYGT#3858
   
