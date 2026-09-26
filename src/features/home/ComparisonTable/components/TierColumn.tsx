import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";
import { usePriceFormatter } from "@/hooks/usePriceFormatter";
import { cn } from "@/lib/utils";
import type { PricingTier } from "../types";

interface TierColumnProps {
  tier: PricingTier;
}

export function TierColumn({ tier }: TierColumnProps) {
  const t = useTranslations("Comparison");
  const common = useTranslations("Common");
  const formatPrice = usePriceFormatter();

  return (
    <div className={cn("col-span-1 text-center", tier.popular && "relative")}>
      {tier.popular && (
        <div className="absolute -top-12 inset-x-0 mx-auto w-fit bg-purple-600 text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
          {common("mostPopular")}
        </div>
      )}
      <div className="font-bold text-xl mb-2">{t(`tiers.${tier.id}.name`)}</div>
      <div className="text-3xl font-bold mb-2">
        {formatPrice(tier.price)}
        <span className="text-lg text-gray-400">{t("perMonthShort")}</span>
      </div>
      <div className="text-sm text-gray-400 mb-4">
        {t(`tiers.${tier.id}.description`)}
      </div>
      <Button
        variant={tier.popular ? "default" : "outline"}
        className={cn(
          "w-full",
          tier.popular
            ? "bg-purple-600 hover:bg-purple-700"
            : "border-gray-700 hover:bg-gray-800"
        )}
      >
        {t(`tiers.${tier.id}.cta`)}
      </Button>
    </div>
  );
}
