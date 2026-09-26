import { useTranslations } from "next-intl";
import { GradientBackdrop, SectionHeader } from "@/components";
import { CompanyLogos, StatsGrid } from "./components";

export default function SocialProof() {
  const t = useTranslations("SocialProof");

  return (
    <section className="relative py-16 overflow-hidden">
      <GradientBackdrop tone="top" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 start-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-10 end-10 w-72 h-72 bg-pink-500 rounded-full filter blur-[100px]" />
      </div>

      <div className="container relative px-4 md:px-8">
        <SectionHeader
          size="compact"
          eyebrow={t("eyebrow")}
          title={t("title")}
        />

        <CompanyLogos />
        <StatsGrid />
      </div>
    </section>
  );
}
