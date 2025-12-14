import { Activity, Lock, Users, Zap, BarChart3, Clock } from "lucide-react";
import type { ReactNode } from "react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export const features: FeatureItem[] = [
  {
    title: "Intuitive Dashboard",
    description:
      "Get a complete overview of your business with our easy-to-use dashboard.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Advanced Analytics",
    description:
      "Make data-driven decisions with comprehensive analytics and reporting.",
    icon: <Activity className="h-6 w-6" />,
  },
  {
    title: "Team Collaboration",
    description: "Work seamlessly with your team members in real-time.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Automation Tools",
    description: "Save time by automating repetitive tasks and workflows.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Secure Storage",
    description: "Keep your data safe with enterprise-grade security measures.",
    icon: <Lock className="h-6 w-6" />,
  },
  {
    title: "24/7 Support",
    description:
      "Get help whenever you need it with our dedicated support team.",
    icon: <Clock className="h-6 w-6" />,
  },
];
