import { Bot, webhookCallback } from "grammy";
import { addCommand } from "../src/commands/addCommand";
import { UserFilter } from "../src/middlewares/userFilter";
import { EnvironmentVariables } from "../src/types/environmentVariables";
import { PATTERN } from "../src/utils/regex.utils";
import { configCommands } from "./handlers/commandHandlers";
import { ErrorHandler } from "./handlers/errorHandler";
import { isProduction } from "./utils/isProduction";

export function startBot() {
  const bot = new Bot(EnvironmentVariables.TOKEN);
  bot.use(UserFilter);

  bot.on([":text"]).hears(PATTERN, async (context) => {
    if (!context.match) return;
    const notification = await addCommand(context.match[0]);
    return notification.Ok(context);
  });

  configCommands(bot);

  bot.catch(ErrorHandler);

  if (isProduction()) {
    return webhookCallback(bot, "http");
  }

  return bot.start();
}
