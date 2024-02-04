import { Bot } from "grammy";
import { EnvironmentVariables } from "./environmentVariables";
import { UserFilter } from "./middlewares/userFilter";
import { addCommand } from "./commands/addCommand";
import { listCommand } from "./commands/listCommand";
import { deleteCommand } from "./commands/deleteCommand";

const bot = new Bot(EnvironmentVariables.TOKEN);
bot.use(UserFilter);

bot.command("add", async (context) => {
  if (!context.match) return;
  await addCommand(context.match);
  return context.reply("Added!");
});

bot.command("list", async (context) => {
  const result = await listCommand();
  return context.reply(result);
});

bot.command("delete", async (context) => {
  if (!context.match) return;
  await deleteCommand(context.match);

  return context.reply(`${context.match} removed!`);
});
bot.start();
