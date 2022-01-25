const Discord = require("discord.js");

exports.run = async (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`[Github Hesabım](https://github.com/Methlegal)`)
        .setTimestamp()

message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Github", "GITHUB"],
  permLevel: 0
};

exports.help = {
  name: 'github',
  description: 'Github profilini gösterir.',
  usage: 'github'
};