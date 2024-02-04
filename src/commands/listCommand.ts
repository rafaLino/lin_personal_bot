import { RegisterRepository } from "../repositories/regiterRepository";
import { Notification } from "../types/Notification";
import { Register } from "../types/Register";

export async function listCommand(): Promise<string> {
  const list = await RegisterRepository.List();

  return list
    .map((item) => `${item.id}: ${item.name} R$ ${item.amount}`)
    .join("\n");
}
