import { Bot, webhookCallback } from "grammy";
import { addCommand } from "../src/commands/addCommand";
import { deleteCommand } from "../src/commands/deleteCommand";
import { listCommand } from "../src/commands/listCommand";
import { EnvironmentVariables } from "../src/types/environmentVariables";
import { UserFilter } from "../src/middlewares/userFilter";
import { PATTERN } from "../src/utils/regex.utils";
import { ErrorHandler } from "../src/utils/errorHandler";
import { sumCommand } from "../src/commands/sumCommand";
import { isProduction } from "./utils/isProduction";
import { setLimitCommand } from "./commands/setLimitCommand";
import { checkBalanceCommand } from "./commands/checkBalanceCommand";

export function startBot() {
  const bot = new Bot(EnvironmentVariables.TOKEN);
  bot.use(UserFilter);

  bot.on([":text"]).hears(PATTERN, async (context) => {
    if (!context.match) return;
    const notification = await addCommand(context.match[0]);
    return notification.Ok(context);
  });

  bot.command("list", async (context) => {
    const notification = await listCommand();
    return notification.Notify(context);
  });

  bot.command("delete", async (context) => {
    if (!context.match) return;
    const notification = await deleteCommand(context.match);
    return notification.Notify(context);
  });

  bot.command("sum", async (context) => {
    const notification = await sumCommand();
    return notification.Notify(context);
  });

  bot.command("limit", async (context) => {
    if (!context.match) return;
    const notification = await setLimitCommand(context.match);
    return notification.Ok(context);
  });

  bot.command("check", async (context) => {
    const notification = await checkBalanceCommand();
    return notification.Notify(context, true);
  });

  bot.catch(ErrorHandler);

  if (isProduction()) {
    return webhookCallback(bot, "http");
  }

  return bot.start();
}
