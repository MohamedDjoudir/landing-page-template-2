import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/config";
import type { FooterColumnData, SocialLinkData } from "../types";

export const COPYRIGHT_YEAR = 2024;

export const footerColumns: FooterColumnData[] = [
  {
    id: "product",
    links: [
      { id: "features", href: "#" },
      { id: "pricing", href: "#" },
      { id: "integrations", href: "#" },
      { id: "roadmap", href: "#" },
    ],
  },
  {
    id: "company",
    links: [
      { id: "about", href: "#" },
      { id: "blog", href: "#" },
      { id: "careers", href: "#" },
      { id: "contact", href: "#" },
    ],
  },
  {
    id: "legal",
    links: [
      { id: "privacy", href: "#" },
      { id: "terms", href: "#" },
      { id: "cookies", href: "#" },
    ],
  },
];

export const socialLinks: SocialLinkData[] = [
  { id: "twitter", icon: Twitter, href: siteConfig.links.twitter },
  { id: "facebook", icon: Facebook, href: siteConfig.links.facebook },
  { id: "instagram", icon: Instagram, href: siteConfig.links.instagram },
  { id: "linkedin", icon: Linkedin, href: siteConfig.links.linkedin },
  { id: "github", icon: Github, href: siteConfig.links.github },
];
