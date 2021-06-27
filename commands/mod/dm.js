const { ownerID } = require('../../owner.json') 

module.exports = {
    config: {
      name: "dm",
      description: "pisanie na DM",
      aliases: ['pm']
    },
    run: async (bot, message, args) => {
        
        if(!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES") && !ownerID.includes(message.author.id)) return;


      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `Nie mozna znalesc podanego uzytkownika`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("You did not specify your message");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("nie moge wysłac wiadomosci!"))
        .then(() => message.channel.send(`Wiadomosc wysłana do  ${user.user.tag}`));
    },
  };