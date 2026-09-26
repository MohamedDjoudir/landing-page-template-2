import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { MegaMenuId } from "../types";

interface NavTriggerProps {
  id: MegaMenuId;
  isActive: boolean;
  onEnter: (id: MegaMenuId, trigger: HTMLElement) => void;
  onLeave: () => void;
}

export function NavTrigger({ id, isActive, onEnter, onLeave }: NavTriggerProps) {
  const t = useTranslations("Header.nav");

  return (
    <div
      className="relative"
      onMouseEnter={(event) => onEnter(id, event.currentTarget)}
      onMouseLeave={onLeave}
    >
      <button
        type="button"
        aria-expanded={isActive}
        className={cn(
          "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded hover:text-white transition",
          isActive ? "text-white" : "text-gray-300"
        )}
      >
        {t(id)}
      </button>
    </div>
  );
}
