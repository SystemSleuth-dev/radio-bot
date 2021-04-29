const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'help',
   description: 'List all of my commands or info about a specific one.',
   execute(message, args) {
      const embed = new MessageEmbed()
      .setColor("RED")
      .setAuthor("Liste des commandes disponibles")
      .addField(`\`'join\``, "Diffuse NRJ dans votre salon vocal, le bot y restera jusqu'à ce que vous le fassiez quitter")
      .addField(`\`'leave\``, "Fait se déconnecter le bot")
      .addField(`\`'invite\``, "Affiche le liens d'invitation du bots radios")
      .addField(`Shark Bot`,`[Invite](https://discord.com/api/oauth2/authorize?client_id=830265165228408832&permissions=8&scope=bot) **|** [Support](https://discord.gg/GbVhukB5Ug)`)
    message.channel.send(embed);
  }
}