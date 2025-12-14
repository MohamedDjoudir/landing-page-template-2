import type { Step } from "@/types";

export const steps: Step[] = [
    {
        number: "01",
        title: "Sign Up",
        description:
            "Create your account in seconds. No credit card required for the free trial.",
        color: "from-purple-500 to-purple-700",
        image: "/images/dashboard.png",
    },
    {
        number: "02",
        title: "Configure",
        description:
            "Set up your workspace and invite your team members to collaborate.",
        color: "from-pink-500 to-purple-500",
        image: "/images/team.png",
    },
    {
        number: "03",
        title: "Import Data",
        description:
            "Easily import your existing data or start fresh with our templates.",
        color: "from-blue-500 to-purple-500",
        image: "/images/webinar.png",
    },
    {
        number: "04",
        title: "Start Working",
        description:
            "Begin using the platform to streamline your workflow and boost productivity.",
        color: "from-purple-500 to-pink-500",
        image: "/images/automation.png",
    },
];
