import { RegisterRepository } from "../repositories/regiterRepository";
import { Notification } from "../types/Notification";
import { createRegister } from "../types/Register";

export async function addCommand(argument: string): Promise<Notification> {
  const register = createRegister(argument);
  if (isNaN(register.amount))
    return Notification.ERROR("The argument is not following the pattern!");

  await RegisterRepository.Save(register);

  return Notification.SUCCESS();
}
