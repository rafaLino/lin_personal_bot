import { LimitRepository } from "../repositories/limitRepository";
import { Notification } from "../types/Notification";
import { getNumber } from "../utils/number.utils";

export async function setLimitCommand(argument: string): Promise<Notification> {
  const value = getNumber(argument);
  if (isNaN(value)) return Notification.ERROR("The argument is invalid!");

  await LimitRepository.Save(value);

  return Notification.SUCCESS();
}
