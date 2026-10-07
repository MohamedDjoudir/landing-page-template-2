import type { Integration } from "../types";

export const integrations: Integration[] = [
  { name: "Slack", categoryId: "communication", logo: "/images/logos/slack.svg" },
  { name: "GitHub", categoryId: "development", logo: "/images/logos/github.svg" },
  { name: "Notion", categoryId: "productivity", logo: "/images/logos/notion.svg" },
  { name: "Google", categoryId: "workspace", logo: "/images/logos/google.svg" },
  { name: "Figma", categoryId: "design", logo: "/images/logos/figma.svg" },
  { name: "Salesforce", categoryId: "crm", logo: "/images/logos/salesforce.svg" },
  { name: "Zapier", categoryId: "automation", logo: "/images/logos/zapier.svg" },
  { name: "Stripe", categoryId: "payments", logo: "/images/logos/stripe.svg" },
  { name: "Hubspot", categoryId: "marketing", logo: "/images/logos/hubspot.svg" },
  { name: "Zoom", categoryId: "meetings", logo: "/images/logos/zoom.svg" },
];
