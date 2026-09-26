import { useTranslations } from "next-intl";
import { siteConfig } from "@/config";
import { COPYRIGHT_YEAR } from "../constants";

export function FooterBottomBar() {
  const t = useTranslations("Footer");

  return (
    <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
      <p>
        {t("copyright", { year: COPYRIGHT_YEAR, brand: siteConfig.name })}
      </p>
    </div>
  );
}
