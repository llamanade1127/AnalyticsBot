const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//This holds the data of the version of the bot. When new commands come out, all you have to do is add them to the commands and commandsWSubstring and increment the itteration
const BotSchema = new Schema({
    itteration:{
        type: Number,
        required: true
    },
    commands:{
        type:[String],
        required: true
    },
    commandsWSubstring:{
        type:[[String]],
        required: true
    }
}, {timestamps: true})


const BotSchema = mongoose.Model('BotData', BotSchema)

module.exports = BotSchema;
