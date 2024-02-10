import { LimitRepository } from "../repositories/limitRepository";
import { Notification } from "../types/Notification";

export async function setLimitCommand(argument: string): Promise<Notification> {
  const value = parseFloat(argument);
  if (isNaN(value)) return Notification.ERROR("The argument is not a number!");

  await LimitRepository.Save(value);

  return Notification.SUCCESS();
}
