import type { PricingPlan } from "@/types";

export const plans: PricingPlan[] = [
    {
        name: "Starter",
        price: "$29",
        description: "Perfect for small businesses and startups",
        features: [
            "5 Team Members",
            "10GB Storage",
            "Basic Analytics",
            "Email Support",
        ],
    },
    {
        name: "Professional",
        price: "$79",
        description: "Ideal for growing businesses",
        features: [
            "15 Team Members",
            "50GB Storage",
            "Advanced Analytics",
            "Priority Support",
            "API Access",
            "Custom Integrations",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "$149",
        description: "For large organizations with complex needs",
        features: [
            "Unlimited Team Members",
            "500GB Storage",
            "Enterprise Analytics",
            "24/7 Dedicated Support",
            "Advanced Security",
            "Custom Development",
            "Onboarding Assistance",
        ],
    },
];
