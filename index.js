const fs = require('fs');
const Discord = require('discord.js');
// const { prefix, token } = require('./config.json');
const prefix = "'" 
const token = "ODMwMjY1MTY1MjI4NDA4ODMy.YHEKsA.Cv2ezf-CcX2SFE-q5Uzs-sqwXx0";



const client = new Discord.Client();
client.commands = new Discord.Collection();

// Getting the commands from the 'commands' folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
   const command = require(`./commands/${file}`);
   client.commands.set(command.name, command);
}


client.once('ready', () => {
   console.log('Ready!');
});

// Message Event
client.on('ready', () => {
   console.log(`[INFO]: Le bot est log sur (${client.user.tag})`);
 client.user.setActivity(`${client.guilds.cache.size} serveurs | *help`, {
       type: 'WATCHING'
   });
});

client.on("message", async (message , args) => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
if (message.content.match(prefixMention)) {
 return message.channel.send(`<:yes:833062177950531624>  **Mon Préfix**: \`'\` `) }})


client.on('message', message => {
   if (!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).trim().split(/ +/);
   const commandName = args.shift().toLowerCase();

   // check: command existance
   if (!client.commands.has(commandName)) return;

   const command = client.commands.get(commandName);

   // check: server only command
   if (command.guildOnly && message.channel.type === 'dm') {
   }


   try {
      command.execute(message, args);
   } catch (error) {
      console.error(error);
   }

});


client.login(token);
