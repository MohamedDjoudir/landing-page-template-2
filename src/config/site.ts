export const siteConfig = {
  name: "SaasPro",
  // The public address of the site, read at build time; canonical and Open
  // Graph URLs are built from it.
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3030",
  ogImage: "/image.png",
  creator: "Mohamed Djoudir",
  links: {
    twitter: "#",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    github: "#",
  },
} as const;
