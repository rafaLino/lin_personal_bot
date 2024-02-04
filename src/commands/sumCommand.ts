import { RegisterRepository } from "../repositories/regiterRepository";
import { Notification } from "../types/Notification";
import { formatMoney } from "../utils/number.utils";

export async function sumCommand(): Promise<Notification> {
  const list = await RegisterRepository.List();

  const sum = list.reduce((prev, curr) => prev + curr.amount, 0);

  return Notification.SUCCESS(formatMoney(sum));
}
