const client = require('../models/user')
const server = require('../models/server')
const bot = require('../models/BotFramework')

async function handleMessage(message, waitList){
    waitList.forEach(async function(element) {
        if(element[0] == message.content.slice(1)){
            let obj = {
                command: element[1],
                message: message.content,
                finalString: ''
            }

            bot.find()
                .then((result) => {
                    result.commandsWSubstring.forEach(command => {
                        if(obj.command == command[0]){
                            obj.finalString = obj.message.replace(command[1], '');
                            
                        }
                    })
                })
        }
    });
}
