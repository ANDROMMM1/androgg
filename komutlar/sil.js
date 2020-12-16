const Discord = require('discord.js');
let owner = "711581818993770549"


exports.run = function(client, message, args, emoji) {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sil` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Mesajları silebilmen için `Mesajları Yönet` yetkisine sahip olmalısın.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTimestamp()
    .setAuthor(`Mnp ❤ Andro Yetkili Vatandaşı Bir Mesaj Sildi`, message.author.avatarURL)
    .addField('<a:onayli:777840751429681163>  **__Kullanılan Komutun Yaptığı Eylem__** ==', 'Belirtilen Miktarda Sohbet Mesajını Silmek')
    .addField('<a:onayli:777840751429681163>  **__Komutu Kullanan Yetkili Vatandaş__** ==', message.author.username)
    .addField('<a:onayli:777840751429681163>  **__Sohbet Silme İşlemi__ **== ', `Sohbet Silme İşlemi **__Başarılı__**`)
    .addField('<a:onayli:777840751429681163>  **__Kullanılan Komut Sonucu Silinen Mesaj__** ==', + messagecount ,)
    return message.channel.sendEmbed(embed).then(msg => msg.delete(5000));
    console.log("**Sohbet " + message.member + " tarafından silindi! **").then(msg => msg.delete(5000));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle"],
  permLevel: 1
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};