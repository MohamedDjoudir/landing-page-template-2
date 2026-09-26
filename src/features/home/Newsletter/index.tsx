import { useTranslations } from "next-intl";
import { GradientBackdrop } from "@/components";
import { siteConfig } from "@/config";
import { NewsletterBackground, NewsletterForm } from "./components";

export default function Newsletter() {
  const t = useTranslations("Newsletter");

  return (
    <section className="relative py-20 overflow-hidden">
      <GradientBackdrop tone="top" />
      <NewsletterBackground />

      <div className="container relative px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-gray-900/80 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute -top-24 -end-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -start-24 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl" />

            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600" />

            <div className="relative text-center mb-10">
              <span className="inline-block px-3 py-1 text-xs font-medium text-purple-400 bg-purple-900/30 rounded-full mb-3">
                {t("badge")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t("headline", { brand: siteConfig.name })}
              </h2>
              <p className="text-gray-300 max-w-lg mx-auto">
                {t("description")}
              </p>
            </div>

            <NewsletterForm />

            <div className="mt-6 text-center text-sm text-gray-400">
              <p>{t("disclaimer")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
