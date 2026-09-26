import type { ComparisonFeature } from "../types";

export const comparisonFeatures: ComparisonFeature[] = [
  { id: "core", availability: { basic: true, pro: true, enterprise: true } },
  { id: "projects", availability: { basic: false, pro: true, enterprise: true } },
  { id: "api", availability: { basic: false, pro: true, enterprise: true } },
  { id: "analytics", availability: { basic: false, pro: true, enterprise: true } },
  { id: "integrations", availability: { basic: false, pro: false, enterprise: true } },
  { id: "support", availability: { basic: false, pro: false, enterprise: true } },
  { id: "sla", availability: { basic: false, pro: false, enterprise: true } },
];
