import type { PricingPlan } from "../types";

export const plans: PricingPlan[] = [
  {
    id: "starter",
    price: 29,
    featureIds: ["team", "storage", "analytics", "support"],
  },
  {
    id: "professional",
    price: 79,
    featureIds: ["team", "storage", "analytics", "support", "api", "integrations"],
    popular: true,
  },
  {
    id: "enterprise",
    price: 149,
    featureIds: [
      "team",
      "storage",
      "analytics",
      "support",
      "security",
      "development",
      "onboarding",
    ],
  },
];
