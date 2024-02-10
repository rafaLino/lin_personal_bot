/**
 * see: https://stackoverflow.com/questions/61435553/is-there-a-way-to-compare-formatted-value-by-numberformat
 */
export const format = (str: string | undefined) =>
  str!.replaceAll("\u{00A0}", " ");
