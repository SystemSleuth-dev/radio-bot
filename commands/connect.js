module.exports = {
   name: 'join',
   description: '',
   guildOnly: true,
   async execute(message, args) {
      if (message.member.voice.channel) {
         message.channel.send('<:yes:833062177950531624> | La radio démarre dans quelques secondes...');

         const cnx = await message.member.voice.channel.join();

         const broadcast = message.client.voice.createBroadcast();
         broadcast.play('http://cdn.nrjaudio.fm/audio1/fr/30001/aac_64.mp3');

         
         broadcast.on('subscribe', dispatcher => {
            console.log(
               `Une émission est diffusée sur le serveur : ${message.guild.name}\n` + 
               `dans un canal vocal nommé: ${dispatcher.player.voiceConnection.channel.name}`
               );
         });

         cnx.play(broadcast, { highWaterMark: 90 , volume: false});
      } else {
         message.channel.send("<:erreur:831901667943120927> | Veuillez d'abord rejoindre un salon vocal.");
      }
   },
};