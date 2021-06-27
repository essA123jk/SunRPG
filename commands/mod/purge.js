const { ownerID } = require('../../owner.json') 

module.exports = {
    config: {
        name: "clear",
        aliases: [],
        category: "moderation",
        description: "Deletes messages from a channel",
        usage: "uzyj /clear [Ilosc wiadomosci]"
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Sufficient Permissions!- [MANAGE_MESSAGES]")
        if (isNaN(args[0]))
            return message.channel.send('**Podaj liczbe wiadomosci**') ;

        if (args[0] > 100)
            return  message.channel.send("**max 100 Wiadomosci!**");
        

        if (args[0] < 1)
            return message.channel.send("**musi byc wieksze niz 1!**");
           

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Pomyslnie usunieto \`${messages.size}/${args[0]}\` wiadomosci**`).then(msg => msg.delete({ timeout: 5000 }))).catch(() => null)
    }
}