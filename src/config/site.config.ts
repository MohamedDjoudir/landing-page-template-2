export const siteConfig = {
    name: "SaasPro",
    description: "Streamline your workflow with our powerful SaaS solution",
    url: "https://saaspro.com",
    ogImage: "/image.png",
    links: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        github: "#",
    },
    creator: "Mohamed Djoudir",
}

export const navigationConfig = {
    mainNav: [
        { title: "Features", href: "#features" },
        { title: "Pricing", href: "#pricing" },
        { title: "Testimonials", href: "#testimonials" },
        { title: "FAQ", href: "#faq" },
    ],
}

export const pricingConfig = {
    plans: [
        {
            name: "Starter",
            price: "$29",
            description: "Perfect for small businesses and startups",
            features: ["5 Team Members", "10GB Storage", "Basic Analytics", "Email Support"],
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
    ],
}

export const comparisonConfig = {
    features: [
        { name: "Core Features", basic: true, pro: true, enterprise: true },
        { name: "Unlimited Projects", basic: false, pro: true, enterprise: true },
        { name: "API Access", basic: false, pro: true, enterprise: true },
        { name: "Advanced Analytics", basic: false, pro: true, enterprise: true },
        { name: "Custom Integrations", basic: false, pro: false, enterprise: true },
        { name: "Dedicated Support", basic: false, pro: false, enterprise: true },
        { name: "SLA Guarantee", basic: false, pro: false, enterprise: true },
    ],
}
