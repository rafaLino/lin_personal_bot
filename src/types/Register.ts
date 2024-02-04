import { getNumber } from "../utils/getNumber";
import { TAKE_VALUE } from "../utils/regex.utils";

export interface Register {
  name: string;
  amount: number;
}

export function createRegister(argument: string): Register {
  const [name, amountString] = argument.split(TAKE_VALUE).filter(Boolean);
  const amount = getNumber(amountString);

  return { name, amount };
}
