const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  
  message.channel.send('<a:em25:777841399386210305> **__En İyi Kayıtçıyı Bulma Oyununa Hoşgeldin__** **__Eğer Oyuna Devam Etmek İstiyorsan__** **==** `devam` **__Oyuna Devam Etmek İstemiyorsan__** **==** `iptal` **__Yazmalısın__**').then(s => {
  
  
  
       let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   if(collected.first().content === "iptal") {
     
  s.edit('<a:arp:787409234219892756> **__En İyi Kayıtçıyı Bulma Oyunu İptal Edildi__**')   
    return 
   }
    
    if(collected.first().content === "devam") {
     //🎰
   s.edit('<a:em25:777841399386210305> **__| En İyi Kayıtçıyı Bulma Oyunu Oynanıyor...!__**').then(codeming => {
     
  setTimeout(() => {
    
  s.edit('<a:em25:777841399386210305> **__| En İyi Kayıtçı Seçiliyor...!__**')  
    
    
    
  }, 4000)
             
     
  setTimeout(() => {
    
let veriler = ["0","1","0","1","0","1","0","1","0","1","0","1","0","1"]
    
let mete = veriler[Math.floor(Math.random() * veriler.length)];    
    
if(mete === "0") {
  
  
  
  
let embed = new Discord.RichEmbed()
.setTitle('<a:arp:787409234219892756> Malesef!')  
.setDescription('<a:arp:787409234219892756> **__En İyi Kayıtçı Sen Değilsin Bir Sonraki Yapacağın Kayıtları Bekliyor Olacağız__**')  
.setFooter(client.user.username, message.guild.iconURL)  
.setColor('GREEN')  


s.delete()

message.channel.send(embed)  
  
 
  
  
 return 
}    
    
if(mete === "1") {
  

  
  
  let embed = new Discord.RichEmbed()
.setTitle('<a:onayli:777840751429681163> Mükemmel!')  
.setDescription(`<a:onayli:777840751429681163> **__En İyi Kayıtçı <@${message.author.id}> Böyle Devam Et Bir Sonraki Yapacağın Kayıtları Bekliyor Olacağız__**`)  
.setFooter(client.user.username, message.guild.iconURL)  
.setColor('GREEN')  


s.delete()

message.channel.send(embed)  
  
   
  
}    
    
    
    
    
  }, 10000)     
     
     
     
   })   
      
    
      
      
      
      
      
      

     
   }   
    
    
    
  })
  
  
  
  })
  
  
  
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["kayitci"], 
  permLevel: 0
};

exports.help = {
  name: 'kayıtçı',
  description: 'taslak', 
  usage: ''
};
