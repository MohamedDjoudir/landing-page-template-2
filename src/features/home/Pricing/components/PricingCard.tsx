import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";
import { usePriceFormatter } from "@/hooks/usePriceFormatter";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "../types";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const t = useTranslations("Pricing");
  const common = useTranslations("Common");
  const formatPrice = usePriceFormatter();

  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border bg-gray-900/50 p-8 backdrop-blur-sm",
        plan.popular
          ? "border-2 border-purple-600 relative"
          : "border-gray-800"
      )}
    >
      {plan.popular && (
        <div className="absolute -top-4 inset-x-0 mx-auto w-fit rounded-full bg-purple-600 px-4 py-1 text-sm font-medium text-white">
          {common("mostPopular")}
        </div>
      )}
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-bold">{t(`plans.${plan.id}.name`)}</h3>
        <div className="mb-2 flex items-baseline">
          <span className="text-4xl font-bold">{formatPrice(plan.price)}</span>
          <span className="text-gray-400">{common("perMonth")}</span>
        </div>
        <p className="text-gray-400">{t(`plans.${plan.id}.description`)}</p>
      </div>
      <ul className="mb-8 flex flex-col gap-3">
        {plan.featureIds.map((featureId) => (
          <li key={featureId} className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-purple-400" />
            <span className="text-gray-300">
              {t(`plans.${plan.id}.features.${featureId}`)}
            </span>
          </li>
        ))}
      </ul>
      <Button
        className={cn(
          "mt-auto text-white",
          plan.popular
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-gray-800 hover:bg-gray-700"
        )}
      >
        {common("getStarted")}
      </Button>
    </div>
  );
}
