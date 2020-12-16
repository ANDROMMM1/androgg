const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
  
   let id = message.author.id;

 let rozetvar = db.fetch(`rozet_${id}`)
 let evvar = db.fetch(`ev_${id}`)
 let arabavar = db.fetch(`araba_${id}`)
let telvar = db.fetch(`telefon_${id}`)
let tesvar = db.fetch(`tesbih_${id}`)
let televar = db.fetch(`televizyon_${id}`)
  

 let rozet;
  if (rozetvar == null) rozet = '<a:arp:787409234219892756> **Onaylı Değil!**'
else rozet = '<a:onayli:777840751429681163> **Onaylı!**' 
  
let ev;
  if (evvar == null) ev = '<a:arp:787409234219892756> **Onaylı Değil!**'
else ev = '<a:onayli:777840751429681163> **Onaylı!**'  
  
let araba;
  if (arabavar == null) araba = '<a:arp:787409234219892756> **Onaylı Değil!**'
else araba = '<a:onayli:777840751429681163> **Onaylı!**' 

let telefon;
  if (telvar == null) telefon = '<a:arp:787409234219892756> **Onaylı Değil!**'
else telefon = '<a:onayli:777840751429681163> **Onaylı!**'   
  
 let tesbih;
  if (tesvar == null) tesbih = '<a:arp:787409234219892756> **Onaylı Değil!**'
else tesbih = '<a:onayli:777840751429681163> **Onaylı!**' 
 
let televizyon;
  if (televar == null) televizyon = '<a:arp:787409234219892756> **Onaylı Değil!**'
else televizyon = '<a:onayli:777840751429681163> **Onaylı!**'  
  
  var embed = new Discord.RichEmbed()
.setTitle(message.member.user.username + ' **Vatandaşının Kayıt Düzeyi;**')
  .addField('<a:registerbook:768554294315450390> **__En Düşük Kayıtçı__ (15)**', rozet, true) 
  .addField('<a:registerbook:768554294315450390> **__Düşük Kayıtçı__ (25)**', ev, true) 
  .addField('<a:registerbook:768554294315450390> **__Kayıtçı__ (35)**', araba, true) 
.addField('<a:registerbook:768554294315450390> **__Orta Düzey Kayıtçı__ (50)**', telefon, true) 
.addField('<a:registerbook:768554294315450390> **__Yüksek Düzey Kayıtçı__ (70)**', tesbih, true) 
.addField('<a:registerbook:768554294315450390> **__Ultimate Düzey Kayıtçı__ (+100)**', televizyon, true) 
 .setColor('GREEN')
 .setFooter('● [Bot Yapımcıları: Mnp ❤ Andro]')
  message.channel.sendEmbed(embed)

  
  
  
  //YASİN
 };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayitduzey','kd'],
  permLevel: 0
};

exports.help = {
  name: 'kayıtdüzey',
  description: '',
  usage: ''
};