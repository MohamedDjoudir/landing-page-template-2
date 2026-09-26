export interface PricingPlan {
  id: string;
  price: number;
  featureIds: string[];
  popular?: boolean;
}
