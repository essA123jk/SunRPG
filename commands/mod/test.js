const { ownerID } = require('../../owner.json') 

module.exports = {
    config: {
        name: "test9",
        aliases: [],
        category: "moderation",
        description: "pysiek skrypter",
        usage: "uzyj !pysiek "
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("")) return message.channel.send("Nie posiadasz permisji!- [MANAGE_MESSAGES]")

        message.channel.send(":apple:***SONDAGE :apple:***")
        .then(function (message) {
          message.react("👍")
          message.react("👎")
        }).catch(function() {
          //Something
         });
    
    }
}