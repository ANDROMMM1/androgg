const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  var toplam = db.fetch(`toplamKayit_${message.author.id}`)
  const genelrol = message.guild.roles.find(r => r.id === "774277123543269416"); 
  const kız = message.guild.roles.find(r => r.id === "774277123543269416"); 
  const misafir = message.guild.roles.find(r => r.id === "774277126308233266"); 
  const log = message.guild.channels.find(c => c.id === "788005664042647552"); 
  const tag = "⼢";
  if(!message.member.roles.array().filter(r => r.id === "774277116384378900")[0]) { 
    return message.channel.send("**Bu İşlemi Gerçekleştirmek İçin Kayıt Sorumlusu Olman Gerekli!**");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("**Bir kullanıcı girin.**")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("**Bir isim girin.**")
      if(!yas) return message.channel.send("**Bir yaş girin.**")
    c.addRole(genelrol)
    c.addRole(kız)
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
    db.add(`bayanKayit_${message.author.id}`, 1)
    db.add(`toplamKayit_${message.author.id}`, 1)
    const embed = new Discord.RichEmbed()
    .addField("<a:developer:786657839615705108> __Bir Kız Kaydı Yapıldı__ <a:developer:786657839615705108>", "```Sunucumuza Bir Kız Vatandaşımızın Kaydı Yapıldı. Lütfen İçeride Ona Saygılı Bir Aile Ortamı Kuracak Şekilde Yaklaşın!.```")
    .addField(`<a:onayli:777840751429681163> Kayıdı Gerçekleştirilen __Kız__ Vatandaşımız ==\n`, `**__${c.user.tag}__**`)
    .addField(`<a:onayli:777840751429681163> Kayıdı Onaylayan Yetkili Vatandaş ==\n`, `**__${message.author.tag}__**`)
    .addField(`<a:onayli:777840751429681163> Sunucumuza Kaydı Yapılan Vatandaşın ==\n`, `**Kayıtlı İsmi == __${tag} ${nick}__ , Kayıtlı Yaşı == __${yas}__**`)
    .addField(`<a:onayli:777840751429681163> Kayıdı Onaylayan Yetkilinin Toplam Kayıt Sayısı ==\n`, toplam || 0)
    .addField("<a:onayli:777840751429681163> __Kayıdı Onaylanan Kullanıcının Güvenlik Durumu__ ==", "`Sunucumuzda Bulunan Kişi == Güvenli`")
    .addField("<a:onayli:777840751429681163> __Kayıdı Onaylanan Kullanıcıya Verilen Tag__ ==", "`Sunucumuzda Bulunan Kişiye Verilen Tag == ⼢`")
    .setFooter("● [Bot Yapımcıları: Mnp ❤ Andro]")
    .setColor("GREEN")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kız"],
  permLevel: 0
};
exports.help = {
  name: "k",
  description: "k",
  usage: "k"
}; //matador //6
