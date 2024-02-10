import { Context } from "grammy";

export class Notification {
  private message?: string;
  private error: boolean;

  constructor(...args: [error: boolean, message?: string]) {
    (this.error = args[0]), (this.message = args[1]);
  }

  get Error() {
    return this.error;
  }

  get Message() {
    return this.message;
  }

  private getMessage() {
    return this.error ? `Error: ${this.message}` : this.message;
  }

  public Notify(context: Context, html: boolean = false) {
    const reply = this.getMessage();
    reply && context.reply(reply, html ? { parse_mode: "HTML" } : {});
  }

  public Ok(context: Context) {
    if (!this.error) context.react("👍");
  }

  static SUCCESS(message?: string) {
    return new Notification(false, message);
  }

  static ERROR(message: string) {
    return new Notification(true, message);
  }
}
