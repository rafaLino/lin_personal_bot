import { Register } from "../types/Register";

export function getNumber(content: string | undefined): number {
  if (!content) return NaN;
  const value = parseFloat(content);
  return value > 0 ? value : NaN;
}

export function formatMoney(number: number) {
  return number.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

export function sumRegisters(list: Array<Register>) {
  return list.reduce((prev, curr) => prev + curr.amount, 0);
}
