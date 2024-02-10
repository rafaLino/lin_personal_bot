import { RegisterRepository } from "../repositories/regiterRepository";
import { Notification } from "../types/Notification";
import { sumRegisters } from "../types/Register";
import { formatMoney } from "../utils/number.utils";

export async function sumCommand(): Promise<Notification> {
  const list = await RegisterRepository.List();

  const sum = sumRegisters(list);

  return Notification.SUCCESS(formatMoney(sum));
}
