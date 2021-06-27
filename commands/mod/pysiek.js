const { ownerID } = require('../../owner.json') 

module.exports = {
    config: {
        name: "pysiek",
        aliases: [],
        category: "moderation",
        description: "pysiek skrypter",
        usage: "uzyj !pysiek "
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("")) return message.channel.send("Nie posiadasz permisji!- [MANAGE_MESSAGES]")

        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
        message.channel.send("Dlaczego pysiek kurwą jest")
    
    }
}