const discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
name: "invite",
category: 'info',
description: "support",
aliases: ["invites",""],
execute(message, args) {
const embed = new discord.MessageEmbed()
      .setAuthor(`Inviter le bot`, `https://cdn.discordapp.com/attachments/800500905551986748/832631453547888670/bfe295940d55ac28771876399f2e83e2.png`)
      .setColor("RED")
      .setTimestamp()
      .setFooter("Inviter le bot", `https://cdn.discordapp.com/attachments/800500905551986748/832631453547888670/bfe295940d55ac28771876399f2e83e2.png`)
      .setDescription(`[\`Cliquez ici !\`](https://discord.com/api/oauth2/authorize?client_id=830265165228408832&permissions=3145728&scope=bot)`)

      message.channel.send(embed); 
}
}