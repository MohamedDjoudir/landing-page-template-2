import { useTranslations } from "next-intl";
import { GradientBackdrop, SectionHeader } from "@/components";
import { siteConfig } from "@/config";
import { FaqList } from "./components";

export default function Faq() {
  const t = useTranslations("Faq");

  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      <GradientBackdrop />

      <div className="absolute top-0 end-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 start-0 w-1/3 h-1/3 bg-pink-900/10 rounded-full blur-3xl" />

      <div className="container relative px-4 md:px-8">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description", { brand: siteConfig.name })}
        />

        <div className="max-w-3xl mx-auto">
          <FaqList />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            {t("stillQuestions")}{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              {t("contactSupport")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
