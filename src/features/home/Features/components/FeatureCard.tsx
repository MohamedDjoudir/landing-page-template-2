import { useTranslations } from "next-intl";
import type { FeatureItem } from "../types";

interface FeatureCardProps {
  feature: FeatureItem;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const t = useTranslations(`Features.items.${feature.id}`);

  return (
    <div className="flex flex-col rounded-xl bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:bg-gray-800/50">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/20 text-purple-400">
        <feature.icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-bold">{t("title")}</h3>
      <p className="text-gray-400">{t("description")}</p>
    </div>
  );
}
