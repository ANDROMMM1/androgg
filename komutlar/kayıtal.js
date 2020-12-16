const Discord = require('discord.js');
exports.run = async(client, message, args, ops) => {
     message.react('777840751429681163')//lütfen çalmayın zaman harcadım lord creative  
    if (!message.member.roles.find("name", "🔨 | Registerian Mod")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** Kayıt Ekibi **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
    let toverify = message.guild.member(message.mentions.users.first());
    let verifyrole = message.guild.roles.find(`name`, "🔨 | Registeration");//lütfen çalmayın zaman harcadım lord creative  
    if (!verifyrole) return message.reply("Rol Bulunamadı Lütfen 'Doğulandı' Adıyla Rol Oluşturunuz.");
    if (!toverify) return message.reply("Bir Kişiyi Et");
    await (toverify.addRole(verifyrole.id));
    let vUser = message.guild.member(message.mentions.users.first());
    let verifembed = new Discord.RichEmbed()
        .setTitle("<a:developer:786657839615705108> __Bir Vatandaşımıza Registerian Yetkisi Verildi__ <a:developer:786657839615705108>")//lütfen çalmayın zaman harcadım lord creative  
        .setColor('GREEN')
        .addField("<a:onayli:777840751429681163> __Registerian Veren Yetkili Vatandaş__ ==", `${message.author.tag}`, true)
        .addField("<a:onayli:777840751429681163> __Registerian Verilen Vatandaş__ ==", `${vUser}`, true)
        .addField("<a:onayli:777840751429681163> __Belirtilen Vatandaşa Verilen Yetki__ ==", `<@&774277116384378900>`)
        .setTimestamp();
    let veriflog = message.guild.channels.find(`name`, "kayıtal-log");
      if (!veriflog) return message.channel.send("Doğrulama Kullanıcı Log Kanalı bulunamadı. Lütfen  Adlı Kanal Oluşturunuz.`");
    veriflog.send(verifembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıtal'],
};

exports.help = {
  name: 'ka',//lütfen çalmayın zaman harcadım lord creative  
  description: 'Kullanıcı İçin Doğrulandı Rolünü Verir.',
  usage: 'a'
}; 

//lütfen çalmayın zaman harcadım lord creative   
//discord.gg/codeworld