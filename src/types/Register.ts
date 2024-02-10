import { getNumber } from "../utils/number.utils";
import { splitValues } from "../utils/regex.utils";

export interface Register {
  name: string;
  amount: number;
}

export function createRegister(argument: string): Register {
  const [name, amountString] = splitValues(argument);
  const amount = getNumber(amountString);

  return { name, amount };
}

export function sumRegisters(list: Array<Register>) {
  return list.reduce((prev, curr) => prev + curr.amount, 0);
}
