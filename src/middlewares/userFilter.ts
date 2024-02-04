import { Context, NextFunction } from "grammy";
import { EnvironmentVariables } from "../environmentVariables";


export async function UserFilter(context: Context, next: NextFunction){
    const valid = context.from?.username === EnvironmentVariables.USER_NAME

    if(!valid) 
    return context.reply("Sorry, I can't help you!")

    return next();
}