const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    commandsPerDay: {
        type:Number,
        required: true
    },
    level: {
        type:Number,
        required: true
    },
    mostUsedCommand:{
        type:String,
        required: true
    },
    isOwner:{
        type: Boolean,
        required: false
    }

}, {timestamps: true})

const User = mongoose.Model('User', userSchema)

module.exports = User;