import type { LucideIcon } from "lucide-react";

export interface FooterColumnData {
  id: string;
  links: { id: string; href: string }[];
}

export interface SocialLinkData {
  id: string;
  icon: LucideIcon;
  href: string;
}
