import { LimitRepository } from "../repositories/limitRepository";
import { RegisterRepository } from "../repositories/regiterRepository";
import { Notification } from "../types/Notification";
import { sumRegisters } from "../types/Register";
import { formatMoney } from "../utils/number.utils";

export async function checkBalanceCommand(): Promise<Notification> {
  const limit: number = await LimitRepository.Get();

  const registers = await RegisterRepository.List();
  const sum = sumRegisters(registers);

  const balance = limit > 1 ? limit - sum : limit;

  return Notification.SUCCESS(
    `Balance: <b>${formatMoney(balance)}</b>\n\nLimit: ${formatMoney(limit)}`
  );
}
