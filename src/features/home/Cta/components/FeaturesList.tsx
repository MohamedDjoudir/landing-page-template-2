import { ctaConfig } from "../config/cta.config";
import { CheckIcon } from "./CheckIcon";

export function FeaturesList() {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 pt-6 border-t border-gray-800">
      {ctaConfig.features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <CheckIcon />
          <span className="text-gray-300 text-sm">{feature}</span>
        </div>
      ))}
    </div>
  );
}
