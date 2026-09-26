import type { LucideIcon } from "lucide-react";

export type MegaMenuId = "products" | "resources";

export interface MegaMenuItem {
  id: string;
  icon: LucideIcon;
  href: string;
}

export interface MegaMenuColumn {
  id: string;
  items: MegaMenuItem[];
}

export interface MegaMenuFeatured {
  href: string;
  imageSrc: string;
}

export interface MegaMenuData {
  id: MegaMenuId;
  columns: MegaMenuColumn[];
  featured: MegaMenuFeatured;
}
