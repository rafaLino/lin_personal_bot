import { BotError, Context, GrammyError, HttpError } from "grammy";

export function ErrorHandler(err: BotError<Context>) {
  const ctx = err.ctx;
  let message: string;
  const e = err.error;
  if (e instanceof GrammyError) {
    message = `Error in request:", ${e.description}`;
  } else if (e instanceof HttpError) {
    message = `Could not contact Telegram:", ${e}`;
  } else {
    message = `Unknown error:", ${e}`;
  }
  ctx.reply(message);
}
