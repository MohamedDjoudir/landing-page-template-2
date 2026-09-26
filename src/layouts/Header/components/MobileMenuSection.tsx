import { useTranslations } from "next-intl";
import type { MobileMenuSectionData } from "../types";
import { MobileMenuLink } from "./MobileMenuLink";

interface MobileMenuSectionProps {
  section: MobileMenuSectionData;
  onNavigate: () => void;
}

export function MobileMenuSection({
  section,
  onNavigate,
}: MobileMenuSectionProps) {
  const t = useTranslations("Header");

  return (
    <div className="mb-3 pb-3 border-b border-gray-800/50">
      <div className="flex items-center mb-2 px-1">
        <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full me-2"></div>
        <h3 className="font-semibold text-white text-base">
          {t(`nav.${section.id}`)}
        </h3>
      </div>
      <div className="space-y-0.5">
        {section.links.map((link) => (
          <MobileMenuLink
            key={link.id}
            link={link}
            label={t(`mobile.${section.id}.${link.id}.title`)}
            description={t(`mobile.${section.id}.${link.id}.description`)}
            iconClassName={section.iconClassName}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
}
