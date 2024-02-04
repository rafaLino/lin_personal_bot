import { RegisterRepository } from "../repositories/regiterRepository";
import { Notification } from "../types/Notification";

const EMPTY_STRING = " ";

function getNumber(content: string | undefined): number {
  if (!content) return NaN;
  return parseFloat(content);
}

export async function addCommand(argument: string): Promise<Notification> {
  const parameters = argument.split(EMPTY_STRING);
  const amount = getNumber(parameters.pop());

  if (isNaN(amount))
    return Notification.ERROR("The argument is not following the pattern!");

  const name = parameters.join(EMPTY_STRING);

  await RegisterRepository.Save({ name, amount });

  return Notification.SUCCESS;
}
