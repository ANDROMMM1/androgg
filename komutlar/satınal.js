const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {
  
let member = db.fetch(`elmaslar_${message.author.id}`)
let members = db.fetch(`kitappara_${message.author.id}`)

 let id = message.author.id;

 let rozetvar = db.fetch(`rozet_${id}`)
 let evvar = db.fetch(`ev_${id}`)
 let arabavar = db.fetch(`araba_${id}`)
 let telvar = db.fetch(`telefon_${id}`)
let tesvar = db.fetch(`tesbih_${id}`)
let televar = db.fetch(`televizyon_${id}`)

 
 let rozetvar1 = new Discord.RichEmbed()
 .setTitle(':warning: Hata!')
 .setDescription(message.member.user.username + ' **__Zaten Bu Kişi Daha Önceden__** `En Düşük Kayıtçı` **__Rütbesine Atanmış.__**')
 .setColor('RED')

  let evvar1 = new Discord.RichEmbed()
 .setTitle(':warning: Hata!')
 .setDescription(message.member.user.username + ' **__Zaten Bu Kişi Daha Önceden__** `Düşük Kayıtçı` **__Rütbesine Atanmış.__**')
 .setColor('RED')
  
   let arabavar1 = new Discord.RichEmbed()
 .setTitle(':warning: Hata!')
 .setDescription(message.member.user.username + ' **__Zaten Bu Kişi Daha Önceden__** `Kayıtçı` **__Rütbesine Atanmış.__**')
 .setColor('RED')

 
   let telvar1 = new Discord.RichEmbed()
 .setTitle(':warning: Hata!')
 .setDescription(message.member.user.username + ' **__Zaten Bu Kişi Daha Önceden__** `Orta Düzey Kayıtçı` **__Rütbesine Atanmış.__**')
 .setColor('RED')

  let tesvar1 = new Discord.RichEmbed()
 .setTitle(':warning: Hata!')
 .setDescription(message.member.user.username + ' **__Zaten Bu Kişi Daha Önceden__** `Yüksek Düzey Kayıtçı` **__Rütbesine Atanmış.__**')
 .setColor('RED')

 let televar1 = new Discord.RichEmbed()
 .setTitle(':warning: Hata!')
 .setDescription(message.member.user.username + ' **__Zaten Bu Kişi Daha Önceden__** `Ultimate Düzey Kayıtçı` **__Rütbesine Atanmış.__**')
 .setColor('RED')
 if(!args[0]) {
   let hata1 = new Discord.RichEmbed()
    .setTitle(':warning: Hata!')
    .setDescription('Kayıt Türünü Belirtmelisin')
    .setColor('RED')
    message.channel.sendEmbed(hata1)
    return
  }
  
 
  
      if(args[0] === "edk") {
  if (rozetvar) {
   message.channel.sendEmbed(rozetvar1)
 return
  }  
    var pc = new Discord.RichEmbed()
 .setTitle(':white_check_mark: **Başarılı!**')
  .setDescription(message.member.user.username + '**__Tebrikler (15) Kayıt Yaptığınız İçin Yetkili Vatandaş Tarafından__** `En Düşük Kayıtçı` **__Rütbesine Atandınız.__**')  
.setColor('GREEN')

 message.channel.sendEmbed(pc)
 db.set(`rozet_${id}`, "var")
 return  
  }

      if(args[0] === "ydk") {
  if (tesvar) {
   message.channel.sendEmbed(tesvar1)
 return
  }  
    var pc = new Discord.RichEmbed()
 .setTitle(':white_check_mark: **Başarılı!**')
  .addFie(message.member.user.username + '**__Tebrikler (70) Kayıt Yaptığınız İçin Yetkili Vatandaş Tarafından__** `Yüksek Düzey Kayıtçı` **__Rütbesine Atandınız.__**')  
.setColor('GREEN')

 message.channel.sendEmbed(pc)
 db.set(`tesbih_${id}`, "var")
 return  
  }
      if(args[0] === "udk") {
  if (televar) {
   message.channel.sendEmbed(televar1)
 return
  }  
    var pc = new Discord.RichEmbed()
 .setTitle(':white_check_mark: **Başarılı!**')
  .setDescription(message.member.user.username + '**__Tebrikler (+100) Kayıt Yaptığınız İçin Yetkili Vatandaş Tarafından__** `Ultimate Düzey Kayıtçı` **__Rütbesine Atandınız.__**')  
.setColor('GREEN')

 message.channel.sendEmbed(pc)
 db.set(`televizyon_${id}`, "var")
 return  
  }
  
       if(args[0] === "dk") {
  if (evvar) {
   message.channel.sendEmbed(evvar1)
 return
  }  
    var pc = new Discord.RichEmbed()
 .setTitle(':white_check_mark: **Başarılı!**')
  .setDescription(message.member.user.username + '**__Tebrikler (25) Kayıt Yaptığınız İçin Yetkili Vatandaş Tarafından__** `Düşük Kayıtçı` **__Rütbesine Atandınız.__**')  
.setColor('GREEN')


 message.channel.sendEmbed(pc)
 db.set(`ev_${id}`, "var")
 return  
  } 
        if(args[0] === "kv") {
  if (arabavar) {
   message.channel.sendEmbed(arabavar1)
 return
  }  
    var pc = new Discord.RichEmbed()
 .setTitle(':white_check_mark: **Başarılı!**')
  .setDescription(message.member.user.username + '**__Tebrikler (35) Kayıt Yaptığınız İçin Yetkili Vatandaş Tarafından__** `Kayıtçı` **__Rütbesine Atandınız.__**')  
.setColor('GREEN')


 message.channel.sendEmbed(pc)
 db.set(`araba_${id}`, "var")
 return  
  }
  
         if(args[0] === "odk") {
  if (telvar) {
   message.channel.sendEmbed(telvar1)
 return
  }  
    var pc = new Discord.RichEmbed()
 .setTitle(':white_check_mark: **Başarılı!**')
  .setDescription(message.member.user.username + '**__Tebrikler (50) Kayıt Yaptığınız İçin Yetkili Vatandaş Tarafından__** `Orta Düzey Kayıtçı` **__Rütbesine Atandınız.__**')  
.setColor('GREEN')


 message.channel.sendEmbed(pc)
 db.set(`telefon_${id}`, "var")
 return  
  }
    
  
  let hata2 = new Discord.RichEmbed()
  .setTitle(':warning: Hata!')
  .setDescription(args[0] + ' Adında,Bir "kayıt türü" bulunamadı!')
  .setColor('RANDOM')
  message.channel.sendEmbed(hata2)
  
  


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rutbever'],
  permLevel: 4
};

exports.help = {
  name: 'rütbever',
  description: '',
  usage: ''
};