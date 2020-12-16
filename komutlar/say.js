const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let tag = "⼢" // tagınız
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("<a:em25:777841399386210305> **Sunucumuzdaki Toplam Vatandaş Sayısı ==** ", message.guild.memberCount)
        .addField("<a:em25:777841399386210305> **Sunucumuzdaki Toplam Çevrimiçi Vatandaş Sayısı ==** ", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField("<a:em25:777841399386210305> **Sesli Kanalda Bulunan Vatandaş Sayısı ==** ", count)
        .addField("<a:em25:777841399386210305> **Tagımızda Bulunan Üye Sayısı ==** ", message.guild.members.filter(m => m.user.username.includes(tag)).size) // tagınız yoksa bu satrı silin
        .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
    message.channel.send(embed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayı'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};