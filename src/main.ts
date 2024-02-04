import { Bot, webhookCallback } from "grammy";
import { addCommand } from "./commands/addCommand";
import { deleteCommand } from "./commands/deleteCommand";
import { listCommand } from "./commands/listCommand";
import { EnvironmentVariables } from "./environmentVariables";
import { UserFilter } from "./middlewares/userFilter";
import { PATTERN } from "./utils/regex.utils";
import { ErrorHandler } from "./utils/errorHandler";
import { sumCommand } from "./commands/sumCommand";
import express from "express";
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

bot.catch(ErrorHandler);

const app = express();

app.use(webhookCallback(bot));
