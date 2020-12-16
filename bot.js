const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');//matador
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Andro | Youtube Channel");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   (chalk.bgBlue.green(e.replace('that was redacted')));
// }); ////

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\


client.on('guildMemberAdd', async member => {
  await member.addRole(`774277126308233266`) 
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = '<a:arp:787409234219892756> • Tehlikeli'
} else {
takizaman = `<a:onayli:777840751429681163> • Güvenli`}require("moment-duration-format");
 let zaman1 = new Date().getTime() - user.createdAt.getTime()
 const gecen = moment.duration(zaman1).format(` YY [Yıl,] DD [Gün,] HH [Saat,] mm [Dakika,] ss [Saniye]`) 
 let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
 let message = member.guild.channels.find(x => x.id === `774306726139658260`)
  const taki = new Discord.RichEmbed()
 .setTitle(
     "Mnp ❤ Andro'a Hoşgeldin"
   )
   .setDescription(`**<a:onayli:777840751429681163>** **__Serendipity Sunucularına Hoşgeldin__** ${member} 
   
**<a:onayli:777840751429681163> Seninle Beraber Serendipity Sunucularında** **__${message.guild.memberCount}__** **Kişiyiz.**

**<a:onayli:777840751429681163>** **Kaydının Yapılabilmesi İçin Teyit Odalarına Geçip İsim ve Yaş Belirt.**

**<a:onayli:777840751429681163> **<@&774277116384378900> **Rolündeki Yetkililer Seninle İlgilenecektir.**

**<a:em25:777841399386210305>** **Sunucumuzun Tagı ==** **⼢**


**<a:onayli:777840751429681163>** **Kullanıcı Hesap Açılma Tarihi ==** ${gecen} 
**<a:em25:777841399386210305>** **Bu Kullanıcı** **|** **${takizaman}**
`)
.setColor('GREEN')
message.send(taki)
 
         }); 
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "..tag" ||
     msg.content.toLowerCase() === "tag") {
    msg.channel.send("⼢");
  }
  if (msg.content.toLowerCase() === "sa" ||
     msg.content.toLowerCase() === "selamın aleyküm" ||
     msg.content.toLowerCase() === "selamun aleyküm" ||
     msg.content.toLowerCase() === "selam") {
   
    msg.channel.send(`**Aleyküm Selam <@${msg.author.id}>, Hoşgeldin!**`)
     msg.react('777840751429681163')
  }
});
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "yetkiliçağır" ||
     msg.content.toLowerCase() === "yetkilicagir") {
    msg.channel.send("<@&774277116384378900> **__Bir Çağrı Gönderildi__** <a:em25:777841399386210305>");
  }
});
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "leviathan" ||
     msg.content.toLowerCase() === "davet") {
    msg.channel.send("<a:developer:786657839615705108> **__Sizin İçin Sunucumuzun Sınırsız Daveti Gösteriliyor__** <a:developer:786657839615705108>");
msg.channel.send("https://discord.gg/KWwAhb9Xrp")
  }
});
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "mnp" ||
     msg.content.toLowerCase() === "andro") {
    msg.channel.send("<:mnpandro:785077392661938176>");
  }
  });
client.on("message", msg => {
      const kelime = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", ".co"];
    if (kelime.some(reklam => msg.content.toLowerCase().includes(reklam))) {
      
      if (msg.member.hasPermission("ADMINISTRATOR")) {
        return;
      }
      
        const embed2 = new Discord.MessageEmbed()
        .setTitle('Reklam Log')
        .addField(`Reklam Yapan Kullanıcı;`, `<@${msg.author.id}>`, true)
        .addField(`Reklam Yapılan Kanal;`, `<#${msg.channel.id}>`, true)
        .addField(`Reklam Mesajı;`,`**${msg}**`)
        .setFooter(msg.author.id, msg.author.avatarURL())
        .setTimestamp();
        msg.guild.channels.cache.get('787402539825234010').send(embed2)
     msg.delete()
      const Embed = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`${msg.author} **Reklam Yasak Bunu Bilmiyormusun!**`)
      msg.channel.send(Embed).then(msg => msg.delete(3000))
    }
  });
client.on("userUpdate", async (old, nev) => {
  let emingSunucu = "763155461955911680"; //Sunucu ID
  let emingKanal = "788005664042647552"; //BILGI KANAL ID
  let emingRol = "774277107622215701"; //ROL ID
  let emingTag = "⼢"; //TAG
  if (old.username !== nev.username) {
    if (
      nev.username.includes(emingTag) &&
      !client.guilds
        .get(emingSunucu)
        .members.get(nev.id)
        .roles.has(emingRol)
    ) {
      client.channels
        .get(emingKanal)
        .send(
          `<a:onayli:777840751429681163> **${nev}, \`${emingTag}\` Tagını Aldığı İçin __⼢ Family Øf Serendipity__ Rolü Verildi**`  );
      client.guilds
        .get(emingSunucu)
        .members.get(nev.id)
        .addRole(emingRol);
    }
    if (
      !nev.username.includes(emingTag) &&
      client.guilds
        .get(emingSunucu)
        .members.get(nev.id)
        .roles.has(emingRol)
    ) {
      client.guilds
        .get(emingSunucu)
        .members.get(nev.id)
        .removeRole(emingRol);
      client.channels
        .get(emingKanal)
        .send(
          `<a:onayli:777840751429681163> **${nev}, \`${emingTag}\` Tagını Çıkarttığı İçin __⼢ Family Øf Serendipity__ Rolü Alındı.**`
        );
    }
  }
});
client.emoji = function(x) {
  return client.emojis.cache.get(client.emojiler[x]);
};
const emoji = global.emoji;

const sayiEmojiler = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: ""
};