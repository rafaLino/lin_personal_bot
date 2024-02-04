export function Today() {
  return new Date();
}

export function EndOfMonth() {
  const today = Today();
  return new Date(today.getFullYear(), today.getMonth() + 1, 0);
}

export function StartOfMonth() {
  const today = Today();
  return new Date(today.getFullYear(), today.getMonth(), 1);
}
