import type { Company, Stat } from "@/types";

export const companies: Company[] = [
    { name: "Slack", logo: "https://cdn.simpleicons.org/slack" },
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify" },
    { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe" },
    { name: "Notion", logo: "https://cdn.simpleicons.org/notion" },
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
    { name: "Trello", logo: "https://cdn.simpleicons.org/trello" },
];

export const stats: Stat[] = [
    { value: "10k+", label: "Active Users" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
];

export const animationVariants = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
    item: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    },
};
