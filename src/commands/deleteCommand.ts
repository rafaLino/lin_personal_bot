import { RegisterRepository } from "../repositories/regiterRepository";

const DELETE_ALL_KEY = "all";

export async function deleteCommand(argument: string) {
  if (argument === DELETE_ALL_KEY) return RegisterRepository.DeleteAll();

  const parameter = parseInt(argument);
  if (isNaN(parameter)) return RegisterRepository.DeleteByName(argument);

  return RegisterRepository.DeleteById(parameter);
}
