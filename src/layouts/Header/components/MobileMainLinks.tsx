import { useTranslations } from "next-intl";
import { mobileLoginLink, mobileMainLinks } from "../constants";
import { MobileMenuLink } from "./MobileMenuLink";

interface MobileMainLinksProps {
  onNavigate: () => void;
}

export function MobileMainLinks({ onNavigate }: MobileMainLinksProps) {
  const t = useTranslations("Header");

  return (
    <div className="mb-3 pb-3 border-b border-gray-800/50">
      <div className="grid grid-cols-2 gap-1">
        {mobileMainLinks.map((link) => (
          <MobileMenuLink
            key={link.id}
            link={link}
            label={t(`nav.${link.id}`)}
            iconClassName="text-indigo-400 group-hover:text-indigo-300"
            onNavigate={onNavigate}
          />
        ))}
        <MobileMenuLink
          link={mobileLoginLink}
          label={t("login")}
          iconClassName="text-gray-400 group-hover:text-gray-300"
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
}
