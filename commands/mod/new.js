const { ownerID } = require('../../owner.json') 

module.exports = {
    config: {
        name: "test2",
        aliases: [],
        category: "moderation",
        description: "Deletes messages from a channel",
        usage: "uzyj !test [wiadomosc]"
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("")) return message.channel.send("Nie posiadasz permisji!- [MANAGE_MESSAGES]")

        message.channel.send("witam")
            .then(messages => message.channel.send(`**Pomyslnie wysłano wiadomosc**`).then(msg => msg.delete({ timeout: 5000 }))).catch(() => null)
    }
}