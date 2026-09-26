import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

interface AvailabilityCellProps {
  isAvailable: boolean;
}

export function AvailabilityCell({ isAvailable }: AvailabilityCellProps) {
  const t = useTranslations("Comparison");

  return (
    <div className="col-span-1 flex justify-center items-center">
      {isAvailable ? (
        <Check className="h-5 w-5 text-purple-400" aria-label={t("included")} />
      ) : (
        <X className="h-5 w-5 text-gray-600" aria-label={t("notIncluded")} />
      )}
    </div>
  );
}
