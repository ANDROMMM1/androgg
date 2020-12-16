const Discord = require('discord.js');
const db = require('quick.db')
var ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setAuthor('Kayıt Liste Menüsü', client.user.avatarURL)
  .setDescription('<a:developer:786657839615705108> **__Androgister Sistemine Hoşgeldiniz__** <a:developer:786657839615705108>\n**--------------------------------------------**\n<a:onayli:777840751429681163> **-- Kayıt Liste Panelim İstendi**\n<a:onayli:777840751429681163> **-- Kayıt Liste Panelim Sizin İçin Gösteriliyor**\n<a:onayli:777840751429681163> **-- Aşşağıda Belirtilen Komutları Kullanmak İçin Açıklamayı Okuyunuz**\n**--------------------------------------------**\n```Merhabalar, Aşşağıda Görmüş Olduğunuz Komutları Ancak Yetkili Yardımıyla Kullanabilirsiniz Belirtilen Kayıt Sayılarını Tamamladıktan Sonra "..kayıtdestek" Komutunu Kullanarak Yetkililere Ulaşınız.```\n<a:onayli:777840751429681163> **|** `..rütbever edk` **| Bu Komutu Kullanabilmek İçin (15) Kayıt Yapmanız Gerekmektedir**\n<a:onayli:777840751429681163> **|** `..rütbever dk` **| Bu Komutu Kullanabilmek İçin (25) Kayıt Yapmanız Gerekmektedir**\n<a:onayli:777840751429681163> **|** `..rütbever kv` **| Bu Komutu Kullanabilmek İçin (35) Kayıt Yapmanız Gerekmektedir**\n<a:onayli:777840751429681163> **|** `..rütbever odk` **| Bu Komutu Kullanabilmek İçin (50) Kayıt Yapmanız Gerekmektedir**\n<a:onayli:777840751429681163> **|** `..rütbever ydk` **| Bu Komutu Kullanabilmek İçin (70) Kayıt Yapmanız Gerekmektedir**\n<a:onayli:777840751429681163> **|** `..rütbever udk` **| Bu Komutu Kullanabilmek İçin (+100) Kayıt Yapmanız Gerekmektedir**\n<a:onayli:777840751429681163> **|** `..kayıtdestek` **| Bu Komut Belirtilen Kayıt Sayısına Ulaştığınızda Onaylı Kayıtçı Rütbesi Almanız İçin Kayıt Talebi Oluşturur**')
  .setFooter('● [Bot Yapımcıları: Mnp ❤ Andro]')
  .setColor('GREEN')
  message.channel.send(yardım)

  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıtliste',
  description: 'taslak', 
  usage: 'yardım'
};
