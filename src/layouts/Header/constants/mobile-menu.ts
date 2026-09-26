import {
  BarChart3,
  BookOpen,
  CreditCard,
  FileText,
  LayoutGrid,
  Laptop,
  LogIn,
  MessageSquare,
  Star,
  Users,
} from "lucide-react";
import type { MobileMenuLinkData, MobileMenuSectionData } from "../types";

export const mobileMenuSections: MobileMenuSectionData[] = [
  {
    id: "products",
    iconClassName: "text-purple-400 group-hover:text-purple-300",
    links: [
      { id: "dashboard", icon: Laptop, href: "#" },
      { id: "team", icon: Users, href: "#" },
      { id: "analytics", icon: BarChart3, href: "#" },
    ],
  },
  {
    id: "resources",
    iconClassName: "text-pink-400 group-hover:text-pink-300",
    links: [
      { id: "documentation", icon: FileText, href: "#" },
      { id: "tutorials", icon: BookOpen, href: "#" },
      { id: "blog", icon: MessageSquare, href: "#" },
    ],
  },
];

export const mobileMainLinks: MobileMenuLinkData[] = [
  { id: "features", icon: LayoutGrid, href: "#features" },
  { id: "pricing", icon: CreditCard, href: "#pricing" },
  { id: "testimonials", icon: Star, href: "#testimonials" },
];

export const mobileLoginLink: MobileMenuLinkData = {
  id: "login",
  icon: LogIn,
  href: "#",
};
