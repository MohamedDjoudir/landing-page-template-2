import type { LucideIcon } from "lucide-react";

export interface MobileMenuLinkData {
  id: string;
  icon: LucideIcon;
  href: string;
}

export interface MobileMenuSectionData {
  id: "products" | "resources";
  iconClassName: string;
  links: MobileMenuLinkData[];
}
