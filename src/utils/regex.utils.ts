export const PATTERN = /^(?!\/)[^\d.,]+ \d+(?:\.\d{1,3})*(?:,\d{1,2})?$/;

export const TAKE_VALUE = /\s(?=\d+(?:,\d+)?|\d+\.\d+(?:,\d+)?$)/;

export function splitValues(content: string) {
  return content.split(TAKE_VALUE).filter(Boolean);
}
