function removeAllDotsThenReplaceCommaToDots(content: string) {
  return content.replaceAll(".", "").replace(",", ".");
}

export function getNumber(content: string | undefined): number {
  if (!content) return NaN;
  const value = parseFloat(removeAllDotsThenReplaceCommaToDots(content));
  return value > 0 ? value : NaN;
}

export function formatMoney(number: number) {
  return number.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
