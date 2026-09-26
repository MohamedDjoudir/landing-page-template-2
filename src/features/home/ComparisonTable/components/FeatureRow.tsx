import { useTranslations } from "next-intl";
import { pricingTiers } from "../constants";
import type { ComparisonFeature } from "../types";
import { AvailabilityCell } from "./AvailabilityCell";

interface FeatureRowProps {
  feature: ComparisonFeature;
}

export function FeatureRow({ feature }: FeatureRowProps) {
  const t = useTranslations("Comparison");

  return (
    <div className="grid grid-cols-4 gap-4 py-4 border-t border-gray-800">
      <div className="col-span-1 flex items-center font-medium">
        {t(`features.${feature.id}`)}
      </div>
      {pricingTiers.map((tier) => (
        <AvailabilityCell
          key={tier.id}
          isAvailable={feature.availability[tier.id]}
        />
      ))}
    </div>
  );
}
