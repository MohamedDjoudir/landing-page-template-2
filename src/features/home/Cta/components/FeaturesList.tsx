import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { ctaFeatureIds } from "../constants";

export function FeaturesList() {
  const t = useTranslations("Cta.features");

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 pt-6 border-t border-gray-800">
      {ctaFeatureIds.map((id) => (
        <div key={id} className="flex items-center gap-2">
          <Check className="w-5 h-5 text-purple-400" />
          <span className="text-gray-300 text-sm">{t(id)}</span>
        </div>
      ))}
    </div>
  );
}
