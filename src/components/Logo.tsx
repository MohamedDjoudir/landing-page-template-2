import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "gradient" | "solid";
}

export function Logo({ variant = "gradient" }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-bold text-xl focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
    >
      <div
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-md text-white",
          variant === "gradient"
            ? "bg-gradient-to-br from-purple-600 to-pink-500 shadow-md"
            : "bg-purple-600"
        )}
      >
        {siteConfig.name.charAt(0)}
      </div>
      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {siteConfig.name}
      </span>
    </Link>
  );
}
