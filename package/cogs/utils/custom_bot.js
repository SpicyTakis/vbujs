import discord from 'discord.js'

class CustomBot extends discord.Bot {
    constructor(...args) {
        this.cogs = []
        this.commands = new Map()
        super(...args)
    }

    add_cog = (cog) => {
        this.cogs.push(cog)

        for (const i in cog.commands.items() => {
            
        }
    }

    add_command = (cog, command_name, command_callback) => {
        
    }
}