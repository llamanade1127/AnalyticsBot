
const Discord = require("discord.js");
const mongoose = require('mongoose');
const {token, dbURL} = require('./config.json');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"], disableEveryone: false , });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(token);


function logIn(){
    mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(console.log('d b connected'));
}

function initialGet(){
    
}