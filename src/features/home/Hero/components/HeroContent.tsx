import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";

export function HeroContent() {
  const t = useTranslations("Hero");

  return (
    <>
      <div className="mb-6 mx-auto max-w-4xl inline-block rounded-full bg-gray-800 px-4 py-1 text-sm">
        <span className="text-purple-400">{t("badge.label")}</span>{" "}
        {t("badge.text")}
      </div>
      <h1 className="mb-6 mx-auto max-w-4xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
        {t("headline")}
      </h1>
      <p className="mb-10 mx-auto max-w-3xl text-xl text-gray-400 md:text-2xl">
        {t("description")}
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button className="bg-purple-600 text-white hover:bg-purple-700 h-12 px-8 text-base">
          {t("primaryCta")}
          <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
        </Button>
        <Button
          variant="outline"
          className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white h-12 px-8 text-base"
        >
          {t("secondaryCta")}
        </Button>
      </div>
    </>
  );
}
