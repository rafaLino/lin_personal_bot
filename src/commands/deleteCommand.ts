import { RegisterRepository } from "../repositories/regiterRepository";
import { Notification } from "../types/Notification";

const DELETE_ALL_KEY = "all";

async function doDelete(argument: string) {
  if (argument === DELETE_ALL_KEY) return RegisterRepository.DeleteAll();

  const parameter = parseInt(argument);
  if (isNaN(parameter)) return RegisterRepository.DeleteByName(argument);

  return RegisterRepository.DeleteById(parameter);
}

export async function deleteCommand(argument: string): Promise<Notification> {
  await doDelete(argument);

  return Notification.SUCCESS(`${argument} removed!`);
}
