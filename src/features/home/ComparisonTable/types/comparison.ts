export type TierId = "basic" | "pro" | "enterprise";

export interface ComparisonFeature {
  id: string;
  availability: Record<TierId, boolean>;
}

export interface PricingTier {
  id: TierId;
  price: number;
  popular?: boolean;
}
