import type { PricingTier } from "../types";

export const pricingTiers: PricingTier[] = [
  { id: "basic", price: 29 },
  { id: "pro", price: 79, popular: true },
  { id: "enterprise", price: 149 },
];
