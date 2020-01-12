const { RichEmbed } = require('discord.js');

module.exports.run = async (client, message, args, config) => {
  // prepare title and desc for embed
  let embed = new RichEmbed()
    .setTitle('Halp')
    .setColor(message.member.displayColor)
    .setDescription('For additional Info, please ask `Phil | Flipper#3621`');
  // creating embed fields for every command
  client.commands.forEach((CMD) => {
    embed.addField(
      `\`${config.prefix}${CMD.help.name} ${CMD.help.usage || ''}\``,
      CMD.help.desc, false,
    );
  });
  // set footer
  // disabled due to design choice
  // embed
  //   .setFooter(message.client.user.tag, message.client.user.displayAvatarURL)
  //   .setTimestamp();
  message.channel.send(embed);
  return;
};

module.exports.help = {
  name: 'help',
  desc: 'Shows a list of commands.',
};