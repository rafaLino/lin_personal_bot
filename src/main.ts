import { Bot } from "grammy";
import { EnvironmentVariables } from "./environmentVariables";
import { UserFilter } from "./middlewares/userFilter";


const bot = new Bot(EnvironmentVariables.TOKEN);
bot.use(UserFilter)

bot.command('add', (context) => {
    if(!context.match) return 
    const item = context.match
    return context.reply(item)
})

bot.start()