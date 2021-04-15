const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const serverSchema = new Schema({
    serverId:{
        type: String,
        required: true
    }, 
    mostUsedCommands:{
        type: String,
        required: true
    },
    botItteration:{
        type: Number,
        required:true
    },
    mostUsedCommand:{
        type:String,
        required:true
    },
    commandsRatePerDay:{
        type: [[String]], //Ex ["work", 30.12] command work is used on average 30.12 times a day
        required: true
    },
    hasAccess:{
        type: [String], //Gives access to the bot
        required: true
    }

}, {timestamps: true})


const Server = mongoose.Model('Server', serverSchema)

module.exports = Server;
