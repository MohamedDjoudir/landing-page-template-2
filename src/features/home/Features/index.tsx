import { useTranslations } from "next-intl";
import { GradientBackdrop, SectionHeader } from "@/components";
import { FeatureCard } from "./components";
import { features } from "./constants";

export default function Features() {
  const t = useTranslations("Features");

  return (
    <section id="features" className="relative py-20 md:py-32">
      <GradientBackdrop />

      <div className="container relative px-4 md:px-8">
        <SectionHeader
          size="narrow"
          title={t("title")}
          description={t("description")}
        />
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
