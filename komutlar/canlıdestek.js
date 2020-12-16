const Discord = require('discord.js');

exports.run = async(client, message, args) => {
const emoji = message.client.emojis.get('📞');
      let isEnabled;
      message.reply("`Birazdan Yetkili Ekibimiz Sizinle İlgilenecektir.`");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "788442672595075122";
      const embed = new Discord.RichEmbed()
        .addField('<a:developer:786657839615705108> __Bir Vatandaş Kayıt Destek Tabinde Bulundu__ <a:developer:786657839615705108>', `<a:developer:786657839615705108> __Canlı Destek Talebi__ <a:developer:786657839615705108>`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("00ff00")
        .addField(`<a:em25:777841399386210305> __Kayıt Destek Bilgileri__ <a:em25:777841399386210305>`, `<a:onayli:777840751429681163> **__Sunucu__** **==** ${message.guild.name} (${message.guild.id}) \n<a:onayli:777840751429681163> **__Kanal__** **==** ${message.channel.name} (${message.channel.id}) \n<a:onayli:777840751429681163> **__Kayıt Destek İsteyen__** **==** ${message.author.tag} (${message.author.id}) \n<a:onayli:777840751429681163> **__Kayıt Destek Mesajı__** **==** ${mesaj}`)
        .setFooter("● [Bot Yapımcıları: Mnp ❤ Andro]")
        client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('** Destek Çağrısına Bağlanmak İçin** `canlıdestek-bağlan` **Yazınız. İptal Etmek İçin** `canlıdestek-iptal` **Yazınız.** <@&788451877578735667>')
    collector.on('message', (message) => {
      if (message.content === 'canlıdestek-iptal') collector.stop('aborted')
      if (message.content === 'canlıdestek-bağlan') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('<a:em25:777841399386210305> Kayıt Destek Zaman Aşımına Uğradı.')
      if (reason === 'aborted') {
        message.reply('<a:arp:787409234219892756> Kayıt Destek Talebi Reddedildi.')
        client.channels.get(destekKanal).send('<a:arp:787409234219892756> Kayıt Destek Başarıyla Reddedildi.')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('<a:onayli:777840751429681163> Kayıt Destek Talebi Alındı.')
        client.channels.get(destekKanal).send('<a:onayli:777840751429681163> Kayıt Destek Talebini İptal Etmek İçin ``iptal`` Yazınız.')
        chan.send(`${message.author}`)
        chan.send('<a:onayli:777840751429681163> Kayıt Destek Talebiniz Yetkili Tarafından Kabul Edildi')
        chan.send('<a:onayli:777840751429681163> Kayıt Destek Talebini İptal Etmek İçin `iptal` Yazınız.')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('iptal')) {
              message.channel.send('<a:arp:787409234219892756> Kayıt Destek İptal Edildi')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('<a:arp:787409234219892756> Kayıt Destek Karşı Tarafdan İptal Edildi')
              if (message.channel.id === destekKanal) chan.send('<a:arp:787409234219892756> Kayıt Destek Karşı Tarafdan İptal Edildi Lütfen Desteği Sonlandırmak İçin `!kapat` Yazınız')

              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`<a:em25:777841399386210305> **Kayıt Talebinde Bulunan Vatandaş :** ${message.author.tag} : ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`<a:developer:786657839615705108> **Müşteri Hizmetleri : ** ${message.author.tag} : ${message.content}`)
          }
          contact(client)
        })
      }
    })
}

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
kategori:'kullanıcı'
};

exports.help = {
  name: 'canlıkayıt',
  aciklama: 'Canlı Destek Oluşturur.',
  kullanim: 'canlıdestek'
};