import { RegisterRepository } from "../repositories/regiterRepository";
import { Notification } from "../types/Notification";

export async function listCommand(): Promise<Notification> {
  const list = await RegisterRepository.List();

  const message = list
    .map((item) => `${item.id} - ${item.name} R$ ${item.amount}`)
    .join("\n");

  return Notification.SUCCESS(message);
}
