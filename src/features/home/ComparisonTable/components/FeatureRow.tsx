import { Check, X } from "lucide-react";
import type { ComparisonFeature } from "../config/comparison.config";

interface FeatureRowProps {
  feature: ComparisonFeature;
}

export function FeatureRow({ feature }: FeatureRowProps) {
  return (
    <div className="grid grid-cols-4 gap-4 py-4 border-t border-gray-800">
      <div className="col-span-1 flex items-center font-medium">
        {feature.name}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        {feature.basic ? (
          <Check className="h-5 w-5 text-purple-400" />
        ) : (
          <X className="h-5 w-5 text-gray-600" />
        )}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        {feature.pro ? (
          <Check className="h-5 w-5 text-purple-400" />
        ) : (
          <X className="h-5 w-5 text-gray-600" />
        )}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        {feature.enterprise ? (
          <Check className="h-5 w-5 text-purple-400" />
        ) : (
          <X className="h-5 w-5 text-gray-600" />
        )}
      </div>
    </div>
  );
}
