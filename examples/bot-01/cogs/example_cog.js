const utils = require('vbujs');

class ExampleCog extends utils.Cog {
    // Using wrapped functions
    this.add_command(async (ctx, ...args) => {
        await ctx.send(args)
    })

    this.bot.on('message')
}

setup = (bot) => {
    x = new ExampleCog(bot)
    bot.add_cog(bot)
}