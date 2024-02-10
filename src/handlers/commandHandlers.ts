import { Api, Bot, CommandContext, Context, RawApi } from "grammy";
import { listCommand } from "../commands/listCommand";
import { deleteCommand } from "../commands/removeCommand";
import { sumCommand } from "../commands/sumCommand";
import { setLimitCommand } from "../commands/setLimitCommand";
import { checkBalanceCommand } from "../commands/checkBalanceCommand";

type CommandType = "list" | "remove" | "sum" | "limit" | "check";
type CommandFunction = (context: CommandContext<Context>) => void;

const COMMANDS = new Map<CommandType, CommandFunction>([
  ["list", list],
  ["remove", remove],
  ["sum", sum],
  ["limit", limit],
  ["check", check],
]);

export function configCommands(bot: Bot) {
  for (const [key, value] of COMMANDS) {
    bot.command(key, value);
  }
}

async function list(context: CommandContext<Context>) {
  const notification = await listCommand();
  return notification.Notify(context);
}

async function remove(context: CommandContext<Context>) {
  if (!context.match) return;
  const notification = await deleteCommand(context.match);
  return notification.Notify(context);
}

async function sum(context: CommandContext<Context>) {
  const notification = await sumCommand();
  return notification.Notify(context);
}

async function limit(context: CommandContext<Context>) {
  if (!context.match) return;
  const notification = await setLimitCommand(context.match);
  return notification.Ok(context);
}

async function check(context: CommandContext<Context>) {
  const notification = await checkBalanceCommand();
  return notification.Notify(context, true);
}
