import { useTranslations } from "next-intl";
import { GradientBackdrop, SectionHeader } from "@/components";
import { FeatureRow, TableHeader } from "./components";
import { comparisonFeatures } from "./constants";

export default function ComparisonTable() {
  const t = useTranslations("Comparison");

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <GradientBackdrop />

      <div className="absolute top-0 start-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      <div className="absolute bottom-0 start-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />

      <div className="container relative px-4 md:px-8">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <TableHeader />
              <div className="space-y-4">
                {comparisonFeatures.map((feature) => (
                  <FeatureRow key={feature.id} feature={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
