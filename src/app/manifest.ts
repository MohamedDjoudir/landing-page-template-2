import type { MetadataRoute } from "next";
import { siteConfig } from "@/config";

// Served at /manifest.webmanifest. The colours match the page, which always
// renders dark (bg-gray-950).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#030712",
    background_color: "#030712",
    display: "standalone",
  };
}
