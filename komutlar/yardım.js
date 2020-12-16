const Discord = require('discord.js');
const db = require('quick.db')
var ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setAuthor('Yardım Menüsü', client.user.avatarURL)
  .setDescription('<a:developer:786657839615705108> **__Androgister Sistemine Hoşgeldiniz__** <a:developer:786657839615705108>\n**--------------------------------------------**\n<a:onayli:777840751429681163> **-- Yardım Panelim İstendi**\n<a:onayli:777840751429681163> **-- Yardım Panelim Sizin İçin Gösteriliyor**\n<a:onayli:777840751429681163> **-- Lütfen Özel Mesajlarınızı Kontrol Ediniz**\n**--------------------------------------------**\n```> Androgister Sistemin Yardım Paneline Yönlendiriliyorsunuz... > Bizi Tercih Ettiğiniz İçin Sizlere Teşekkür Ediyoruz. > Sizlerinde Desteğiyle Geliştirmeye Devam Ediyoruz.```')
  .setFooter('● [Bot Yapımcıları: Mnp ❤ Andro]')
  .setColor('GREEN')
  message.channel.send(yardım)
  
  
  let prefix = ayarlar.prefix
  
  
  let codeming = new Discord.RichEmbed()
  .setTitle(client.user.username +' Yardım Menüsü')
 .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(` ${client.user.username} - Register Yardım Menüsü`)
       .setDescription("<a:developer:786657839615705108> **__Androgister Sistemine Hoşgeldiniz__** <a:developer:786657839615705108>\n**--------------------------------------------**\n<a:onayli:777840751429681163>** -- Prefixim == ``..``**\n<a:onayli:777840751429681163> ** -- Kullandığım Dil == ``Türkçe``**\n<a:onayli:777840751429681163> **-- Benim Yapımcılarım ==** ``Mnp`` **ve** ``Andro``\n<a:onayli:777840751429681163> **-- Kütüphane ==** ``discord.js``\n<a:onayli:777840751429681163> **-- Botun Oluşturulduğu Tarih ==** ``10.12.2020 Perşembe`` \n**--------------------------------------------**\n<a:emoji_21:777275677354754119> **|** `..erkek veya ..e` \n ```Erkek Vatandaş Kayıt Etmek İçin Kullanılır. Kız Vatandaşları Bu Komutla Kayıt Etmeyiniz.```\n<a:emoji_21:777275677354754119> **|** `..kız veya ..k` \n ```Kız Vatandaş Kayıt Etmek İçin Kullanılır. Erkek Vatandaşları Bu Komutla Kayıt Etmeyiniz.```\n<a:emoji_21:777275677354754119> **|** `..kayıtsay veya ..ks` \n ```Sunucu İçerisinde Toplamda Kaç Kişi Kaydetmişsiniz İstatistiklerinizi Gösterir. Genel Onaylı Kayıt Toplam - Erkek Onaylı Toplam - Kız Onaylı Toplam.```\n<a:emoji_21:777275677354754119> **|** `..kayıtçı veya ..kayitci` \n ```Sunucu İçerisinde En İyi Kayıtçı Sizmisiniz Yoksa Değilmisiniz. Kısa ve Eğlenceli Bir Oyun.```\n<a:emoji_21:777275677354754119> **|** `..sil veya ..temizle` \n ```Sohbet İçerisinde Belirttiğiniz Kadar Mesaj Silersiniz. En Fazla 100 Adet Mesaj Silinebilir.```\n<a:emoji_21:777275677354754119> **|** `..kayıtal veya ..ka` \n ```Kayıt Yetkilisi Yani (Registerian) Alırsınız.```\n")  
        
  .setThumbnail(client.user.avatarURL)
        .setImage("") 
  .setFooter('● [Bot Yapımcıları: Mnp ❤ Andro]')
  .setTimestamp()
  .setColor('RANDOM')
  message.author.send(codeming)
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'taslak', 
  usage: 'yardım'
};
