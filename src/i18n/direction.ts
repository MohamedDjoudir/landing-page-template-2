const RTL_LOCALES: readonly string[] = ["ar"];

export type Direction = "ltr" | "rtl";

export function getDirection(locale: string): Direction {
  return RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
}
