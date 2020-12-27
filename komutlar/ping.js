const Discord = require('discord.js')

exports.run = (client, message, params) => {
  
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle("AngelBot Ping Sistemi")
  .setDescription(`[Davet Et](https://angelbotweb.glitch.me)`)
  .addField("API Gecikmesi:", `*  *${client.ping}** ms!`)
  .setFooter(`AngelBot | Ping Sistemi`)
  message.channel.send(embed)
  }
exports.conf = {
  enable: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "ping"
}