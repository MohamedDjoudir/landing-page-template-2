import {
  BarChart3,
  FileText,
  HelpCircle,
  Laptop,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import type { MegaMenuData } from "../types";

export const megaMenus: MegaMenuData[] = [
  {
    id: "products",
    columns: [
      {
        id: "core",
        items: [
          { id: "dashboard", icon: Laptop, href: "#" },
          { id: "team", icon: Users, href: "#" },
          { id: "analytics", icon: BarChart3, href: "#" },
        ],
      },
      {
        id: "addons",
        items: [
          { id: "automation", icon: Zap, href: "#" },
          { id: "integrations", icon: Settings, href: "#" },
          { id: "reports", icon: FileText, href: "#" },
        ],
      },
    ],
    featured: { href: "#", imageSrc: "/images/dashboard.png" },
  },
  {
    id: "resources",
    columns: [
      {
        id: "support",
        items: [
          { id: "documentation", icon: FileText, href: "#" },
          { id: "knowledgeBase", icon: HelpCircle, href: "#" },
          { id: "community", icon: Users, href: "#" },
        ],
      },
      {
        id: "learning",
        items: [
          { id: "tutorials", icon: Laptop, href: "#" },
          { id: "webinars", icon: Zap, href: "#" },
          { id: "blog", icon: FileText, href: "#" },
        ],
      },
    ],
    featured: { href: "#", imageSrc: "/images/webinar.png" },
  },
];
