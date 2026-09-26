import { useFormatter } from "next-intl";

export function usePriceFormatter(currency = "USD") {
  const format = useFormatter();

  return (price: number) =>
    format.number(price, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    });
}
