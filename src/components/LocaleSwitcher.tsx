"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui";
import { routing } from "@/i18n";
import { Link, usePathname } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <>
      {routing.locales
        .filter((target) => target !== locale)
        .map((target) => (
          <Button
            key={target}
            asChild
            variant="ghost"
            size="sm"
            className="gap-1.5 text-gray-300 hover:text-white"
          >
            <Link
              href={pathname}
              locale={target}
              hrefLang={target}
              aria-label={t("switchTo", { language: t(`names.${target}`) })}
            >
              <Languages className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">{t(`names.${target}`)}</span>
            </Link>
          </Button>
        ))}
    </>
  );
}
