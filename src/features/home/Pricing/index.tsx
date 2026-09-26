import { useTranslations } from "next-intl";
import { DotPattern, SectionHeader } from "@/components";
import { PricingCard } from "./components";
import { plans } from "./constants";

export default function Pricing() {
  const t = useTranslations("Pricing");

  return (
    <section id="pricing" className="relative py-20 md:py-32">
      <DotPattern />

      <div className="container relative px-4 md:px-8">
        <SectionHeader
          size="narrow"
          title={t("title")}
          description={t("description")}
        />
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
