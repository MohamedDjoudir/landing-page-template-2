import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { MobileMenuLinkData } from "../types";

interface MobileMenuLinkProps {
  link: MobileMenuLinkData;
  label: string;
  description?: string;
  iconClassName: string;
  onNavigate: () => void;
}

export function MobileMenuLink({
  link,
  label,
  description,
  iconClassName,
  onNavigate,
}: MobileMenuLinkProps) {
  return (
    <Link
      href={link.href}
      className="flex items-center py-2 px-3 text-gray-200 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
      onClick={onNavigate}
    >
      <link.icon
        className={cn("h-4 w-4 me-2 transition-colors", iconClassName)}
      />
      {description ? (
        <>
          <div>
            <div className="font-medium text-sm">{label}</div>
            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
              {description}
            </div>
          </div>
          <ChevronRight className="ms-auto h-3 w-3 text-gray-500 group-hover:text-gray-300 transition-colors rtl:rotate-180" />
        </>
      ) : (
        <span className="font-medium text-sm">{label}</span>
      )}
    </Link>
  );
}
