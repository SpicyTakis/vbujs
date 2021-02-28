const utils = require('.')
const events = require('events')

class CustomCog extends events.EventListener {
    constructor(bot) {
        this.bot = bot;
    }
}