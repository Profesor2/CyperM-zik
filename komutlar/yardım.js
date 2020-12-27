const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Çalıştırma Komutları`)
        .setDescription(`
:white_small_square: |  **${ayarlar.prefix}oynat ** İstediğiniz Müziği Oynatır\n
:white_small_square: |  **${ayarlar.prefix}durdur ** Oynatılan Müziği Durdurur.\n 
:white_small_square: |  **${ayarlar.prefix}geç ** Sıradaki Şarkıya Geçer.\n 
:white_small_square: |  **${ayarlar.prefix}ses ** Ses Seviyesini Belirler.\n 
:white_small_square: |  **${ayarlar.prefix}tekrar **Çalan şarkı bitince tekrar çalar\n
:white_small_square: |  **${ayarlar.prefix}kuyruk ** Sıradaki Şarkıları Gösterir.\n 
:white_small_square: |  **${ayarlar.prefix}devamet ** Durdurulan Müziği Oynatır.\n 
:white_small_square: |  **${ayarlar.prefix}oynatılan ** Şuan da Çalan Müziği Gösterir.\n 
:white_small_square: |  **${ayarlar.prefix}sözler ** Şuan da Çalan Müziğin Sözlerini Gösterir.\n
:white_small_square: |  **${ayarlar.prefix}ping ** Botun Pingini Gösterir.\n 
:white_small_square: |  **${ayarlar.prefix}kapat ** Oynatılan Müziği Kapatır.\n \n`)
    


        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://angelbotweb.glitch.me) **|** [Destek Sunucusu](https://discord.gg/GP98AEn) **|**  `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0,
};
exports.help = {
  name: "yardım"
};