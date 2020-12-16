const Discord = require('discord.js');

exports.run = (client, message, args) => {
 message.delete();
    message.guild.createChannel(`talep-${message.author.username}`, 'text').then(ch => {
        ch.overwritePermissions(message.member.roles.first(),{
            VIEW_CHANNEL: false,
        }).catch()
        message.guild.roles.forEach((role) => {
            if (role.hasPermission("BAN_MEMBERS")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: true,
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        })

        const embed = new Discord.RichEmbed()
        .setTitle(`» Hey ${message.author.username} !`)
        .setAuthor("» Serendipity | Destek Sistemi")
        .setDescription("<a:onayli:777840751429681163> **__Kayıt Desteğe Hoşgeldiniz__** **__Bu Kanal Kayıt Destek Talebinizin Başkaları Tarafından Görülmemesi İçin Açılmıştır__** **Yetkili İle İletişime Geçmek İçin `..canlıkayıt <@sebep>` Yazmanız Yeterli Olacaktır** **Tamamen Talebinizi İptal Etmek İçin `!kapat` Yazabilirsiniz**")
        .setFooter('● [Bot Yapımcıları: Mnp ❤ Andro]', client.user.avatarURL)
        .setTimestamp()
        ch.send(embed).catch()
      ch.send(`<@${message.author.id}>`)
        ch.awaitMessages((msg)=> {
            if (msg.content === "!kapat") {
                ch.send("`Teşekkürler iptal ediliyor!`").then(()=>{
                    setTimeout(()=> {
                        ch.delete().catch()
                    },1000)
                });
            }
        },{time:86400000})
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['talep'],
  permLevel: 0
};

exports.help = {
  name: 'kayıtdestek',
  description: 'Destek talebi açar.',
  usage: 'talep'
};