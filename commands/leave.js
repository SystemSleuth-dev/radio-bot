module.exports = {
   name: 'leave',
   description: 'Leave the voice channel.',
   guildOnly: true,
   execute(message, args) {
      if (message.member.voice.channel) {
         message.channel.send("<:yes:833062177950531624> | J'ai quitté le salon vocal");
         message.member.voice.channel.leave();
      } else {
         message.channel.send('<:erreur:831901667943120927> | Je ne suis pas dans un salon vocal pour partir !');
      }
   },
};