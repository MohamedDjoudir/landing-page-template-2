import { Button } from "@/components/ui/button";
import { pricingTiers } from "../config/comparison.config";

export function TableHeader() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      <div className="col-span-1" />

      {/* Basic */}
      <div className="col-span-1 text-center">
        <div className="font-bold text-xl mb-2">{pricingTiers.basic.name}</div>
        <div className="text-3xl font-bold mb-2">
          {pricingTiers.basic.price}
          <span className="text-lg text-gray-400">/mo</span>
        </div>
        <div className="text-sm text-gray-400 mb-4">
          {pricingTiers.basic.description}
        </div>
        <Button
          variant="outline"
          className="w-full border-gray-700 hover:bg-gray-800"
        >
          {pricingTiers.basic.buttonText}
        </Button>
      </div>

      {/* Pro */}
      <div className="col-span-1 text-center relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs font-bold py-1 px-3 rounded-full">
          MOST POPULAR
        </div>
        <div className="font-bold text-xl mb-2">{pricingTiers.pro.name}</div>
        <div className="text-3xl font-bold mb-2">
          {pricingTiers.pro.price}
          <span className="text-lg text-gray-400">/mo</span>
        </div>
        <div className="text-sm text-gray-400 mb-4">
          {pricingTiers.pro.description}
        </div>
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          {pricingTiers.pro.buttonText}
        </Button>
      </div>

      {/* Enterprise */}
      <div className="col-span-1 text-center">
        <div className="font-bold text-xl mb-2">
          {pricingTiers.enterprise.name}
        </div>
        <div className="text-3xl font-bold mb-2">
          {pricingTiers.enterprise.price}
          <span className="text-lg text-gray-400">/mo</span>
        </div>
        <div className="text-sm text-gray-400 mb-4">
          {pricingTiers.enterprise.description}
        </div>
        <Button
          variant="outline"
          className="w-full border-gray-700 hover:bg-gray-800"
        >
          {pricingTiers.enterprise.buttonText}
        </Button>
      </div>
    </div>
  );
}
