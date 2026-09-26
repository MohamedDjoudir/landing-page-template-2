import { useTranslations } from "next-intl";
import { GradientBackdrop, SectionHeader } from "@/components";
import { siteConfig } from "@/config";
import { IntegrationGrid } from "./components";

export default function Integrations() {
  const t = useTranslations("Integrations");

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <GradientBackdrop tone="top" />

      <div className="absolute top-0 start-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -end-40 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -start-40 w-80 h-80 bg-pink-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative px-4 md:px-8">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description", { brand: siteConfig.name })}
        />

        <IntegrationGrid />

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">{t("more")}</p>
          <a
            href="#"
            className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center"
          >
            {t("viewAll")}
            <svg
              className="w-4 h-4 ms-1 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
