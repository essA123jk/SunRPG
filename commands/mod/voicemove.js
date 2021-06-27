const { ownerID } = require("../../owner.json")

module.exports = {
    config: {
    
        name: "vcmove",
        description: "przenoszenie uzytkownikow",
        usage: "uzyj. vcmove <uzytkownik> <kanał>",
       
    },

    run: async(bot, message, args) => {
         if (!message.member.hasPermission("MOVE_MEMBERS") && !ownerID .includes(message.author.id)) return message.channel.send("**You Dont Have The Permissions To Ban Users! - [MOVE_MEMBERS]**");
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase());

        if(!member) return message.channel.send("Nie znalezlismy podanego uzytkownika.")

        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[1]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!channel.type === "voice") return message.channel.send("Unable to locate the voice channel. Make sure to mention a voice channel not a text channel!") 

        try {
            member.voice.setChannel(channel);
            message.channel.send("Sukces ✅ : uzytkownik przeniesiony!")
        } 
        
        catch(error) {
            console.log(error);
            message.channel.send("ups. sproboj ponownie pozniej.")
        }

    }
}