import type { FeatureItem } from "../config/features.config";

interface FeatureCardProps {
  feature: FeatureItem;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:border-purple-900/50 hover:bg-gray-800/50">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/20 text-purple-400">
        {feature.icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </div>
  );
}
