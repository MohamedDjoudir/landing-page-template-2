import type { Integration } from "../types";

export const integrations: Integration[] = [
  { name: "Slack", categoryId: "communication", logo: "https://cdn.simpleicons.org/slack" },
  { name: "GitHub", categoryId: "development", logo: "https://cdn.simpleicons.org/github" },
  { name: "Notion", categoryId: "productivity", logo: "https://cdn.simpleicons.org/notion" },
  { name: "Google", categoryId: "workspace", logo: "https://cdn.simpleicons.org/google" },
  { name: "Figma", categoryId: "design", logo: "https://cdn.simpleicons.org/figma" },
  { name: "Salesforce", categoryId: "crm", logo: "https://cdn.simpleicons.org/salesforce" },
  { name: "Zapier", categoryId: "automation", logo: "https://cdn.simpleicons.org/zapier" },
  { name: "Stripe", categoryId: "payments", logo: "https://cdn.simpleicons.org/stripe" },
  { name: "Hubspot", categoryId: "marketing", logo: "https://cdn.simpleicons.org/hubspot" },
  { name: "Zoom", categoryId: "meetings", logo: "https://cdn.simpleicons.org/zoom" },
];
