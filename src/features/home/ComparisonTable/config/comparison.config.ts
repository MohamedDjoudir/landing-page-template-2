export interface ComparisonFeature {
    name: string;
    basic: boolean;
    pro: boolean;
    enterprise: boolean;
}

export const comparisonFeatures: ComparisonFeature[] = [
    { name: "Core Features", basic: true, pro: true, enterprise: true },
    { name: "Unlimited Projects", basic: false, pro: true, enterprise: true },
    { name: "API Access", basic: false, pro: true, enterprise: true },
    { name: "Advanced Analytics", basic: false, pro: true, enterprise: true },
    { name: "Custom Integrations", basic: false, pro: false, enterprise: true },
    { name: "Dedicated Support", basic: false, pro: false, enterprise: true },
    { name: "SLA Guarantee", basic: false, pro: false, enterprise: true },
];

export const pricingTiers = {
    basic: {
        name: "Basic",
        price: "$29",
        description: "For small teams",
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
    },
    pro: {
        name: "Professional",
        price: "$79",
        description: "For growing businesses",
        buttonText: "Get Started",
        buttonVariant: "primary" as const,
        popular: true,
    },
    enterprise: {
        name: "Enterprise",
        price: "$149",
        description: "For large organizations",
        buttonText: "Contact Sales",
        buttonVariant: "outline" as const,
    },
};
