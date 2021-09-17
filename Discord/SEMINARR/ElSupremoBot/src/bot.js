require("dotenv").config();
const { Client } = require('discord.js');
const { WebhookClient } = require('discord.js');

const client = new Client();
const webhookClient = new WebhookClient(
    process.env.WEBHOOK_DIRDOFF_ID,
    process.env.WEBHOOK_DIRDOFF_TOKEN
);
const PREFIX = "/";


client.on("ready", function(){
    console.log("The bot logged in successfully!");
    console.log(client.user.username)
});

client.on("message", function(message){
    console.log(`${message.author.tag} : ${message.content}`);

    if(message.author.bot !== true){
        if(message.content == "Ha?"||message.content == "ha?"){
            //message.reply("Hatdog!")
            message.channel.send("Hatdog!")
            
        }

        if(message.content.startsWith(PREFIX)){
            const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);

            console.log(CMD_NAME);
            console.log(args)
            message.channel.send(`**Command:** ${CMD_NAME}, **Parameters:** ${args}`)
        }
    }
});

client.on("messageReactionAdd", function(message, user){
    console.log(message)
    console.log(user)
})

client.login(process.env.DISCORDJS_BOT_TOKEN)

