export function getNumber(content: string | undefined): number {
  if (!content) return NaN;
  return parseFloat(content);
}
