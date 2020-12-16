const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
let tag = "⼢"

const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var erkek = db.fetch(`erkekKayit_${message.author.id}`)
var bayan = db.fetch(`bayanKayit_${message.author.id}`)
var toplam = db.fetch(`toplamKayit_${message.author.id}`)

const embed = new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(`Mnp ❤ Andro Vatandaşının Kayıt İstatistiği`, message.author.avatarURL)
.addField("<a:developer:786657839615705108> __Yetkilinin Kayıt İstatistiği Gösteriliyor__ <a:developer:786657839615705108>", "```Burada Toplamda Ne Kadar Kişi Kayıt Ettiğinizi , Kaç Adet Kız Kaç Adet Erkek Kaydettiğinizin İstatistiğini Görebilirsiniz.```")
.addField(`<a:onayli:777840751429681163> __Toplam Kayıt Edilen Vatandaş Sayısı__ ==`, db.fetch(`toplamKayit_${message.author.id}`) || 0)
.addField(`<a:onayli:777840751429681163> __Kayıt Edilen Onaylı Erkek Vatandaş Sayısı__ ==`, db.fetch(`erkekKayit_${message.author.id}`) || 0)
.addField(`<a:onayli:777840751429681163> __Kayıt Edilen Onaylı Kız Vatandaş Sayısı__ ==`, db.fetch(`bayanKayit_${message.author.id}`) || 0)
.addField(`<a:onayli:777840751429681163> __Kayıt İstatistikleri Gösterilen Vatandaş__ == `,`<@${message.author.id}>`)
.addField(`<a:onayli:777840751429681163> __Sunucumuzda Bulunan Toplam Vatandaş Sayısı__ == `,`${message.guild.memberCount}`)
.addField("<a:onayli:777840751429681163> **Tagımızda Bulunan Üye Sayısı ==** ", message.guild.members.filter(m => m.user.username.includes(tag)).size)
.addField("<a:onayli:777840751429681163> **Sesli Kanalda Bulunan Vatandaş Sayısı ==** ", count)
.addField(`<a:onayli:777840751429681163> __Kayıt İstatistiklerinin Gösterildiği Kanal__ ==`,`${message.channel.name}`)
.addField(`<a:onayli:777840751429681163> __Mnp ❤ Andro Sunucumuzun Discord Adresi__ ==`,`Ayarlanmamış`)
.setFooter("● [Bot Yapımcıları: Mnp ❤ Andro]");
 

message.channel.send(embed)  
  
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ks"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıtsay',
  description: '',
  usage: ''
}; //matador