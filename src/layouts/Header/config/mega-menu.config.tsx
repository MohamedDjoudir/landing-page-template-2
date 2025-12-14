import {
  Laptop,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  FileText,
  Zap,
} from "lucide-react";
import type { MegaMenuData } from "@/types";

export const megaMenuConfig: Record<string, MegaMenuData> = {
  products: {
    title: "Products",
    columns: [
      {
        title: "Core Platform",
        items: [
          {
            icon: <Laptop className="h-5 w-5" />,
            title: "Dashboard",
            description: "Complete overview of your business",
            href: "#",
          },
          {
            icon: <Users className="h-5 w-5" />,
            title: "Team Management",
            description: "Organize and manage your team",
            href: "#",
          },
          {
            icon: <BarChart3 className="h-5 w-5" />,
            title: "Analytics",
            description: "Insights and data visualization",
            href: "#",
          },
        ],
      },
      {
        title: "Add-ons",
        items: [
          {
            icon: <Zap className="h-5 w-5" />,
            title: "Automation",
            description: "Streamline your workflows",
            href: "#",
          },
          {
            icon: <Settings className="h-5 w-5" />,
            title: "Integrations",
            description: "Connect with other tools",
            href: "#",
          },
          {
            icon: <FileText className="h-5 w-5" />,
            title: "Reports",
            description: "Generate detailed reports",
            href: "#",
          },
        ],
      },
    ],
    featured: {
      title: "New Feature",
      description: "Try our new AI-powered analytics dashboard",
      ctaText: "Learn More",
      ctaLink: "#",
      imageSrc: "/images/dashboard.png",
    },
  },
  resources: {
    title: "Resources",
    columns: [
      {
        title: "Help & Support",
        items: [
          {
            icon: <FileText className="h-5 w-5" />,
            title: "Documentation",
            description: "Guides and references",
            href: "#",
          },
          {
            icon: <HelpCircle className="h-5 w-5" />,
            title: "Knowledge Base",
            description: "Answers to common questions",
            href: "#",
          },
          {
            icon: <Users className="h-5 w-5" />,
            title: "Community Forum",
            description: "Connect with other users",
            href: "#",
          },
        ],
      },
      {
        title: "Learning",
        items: [
          {
            icon: <Laptop className="h-5 w-5" />,
            title: "Tutorials",
            description: "Step-by-step guides",
            href: "#",
          },
          {
            icon: <Zap className="h-5 w-5" />,
            title: "Webinars",
            description: "Live and recorded sessions",
            href: "#",
          },
          {
            icon: <FileText className="h-5 w-5" />,
            title: "Blog",
            description: "Latest news and tips",
            href: "#",
          },
        ],
      },
    ],
    featured: {
      title: "Latest Webinar",
      description: "Maximizing Productivity with SaasPro",
      ctaText: "Watch Now",
      ctaLink: "#",
      imageSrc: "/images/webinar.png",
    },
  },
};
