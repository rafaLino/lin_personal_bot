import { Context } from "grammy";

export class Notification {
  private message?: string;
  private error: boolean;

  constructor(...args: [error: boolean, message?: string]) {
    (this.error = args[0]), (this.message = args[1]);
  }

  private getMessage() {
    return this.error ? `Error: ${this.message}` : this.message;
  }

  public Notify(context: Context) {
    const reply = this.getMessage();
    reply && context.reply(reply);
  }

  static SUCCESS(message?: string) {
    return new Notification(false, message);
  }

  static ERROR(message: string) {
    return new Notification(true, message);
  }
}
