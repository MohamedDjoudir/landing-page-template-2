import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PricingPlan } from "@/types";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`flex flex-col rounded-xl border bg-gray-900/50 p-8 backdrop-blur-sm ${
        plan.popular ? "border-2 border-purple-600 relative" : "border-gray-800"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-4 py-1 text-sm font-medium text-white">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
        <div className="mb-2 flex items-baseline">
          <span className="text-4xl font-bold">{plan.price}</span>
          <span className="text-gray-400">/month</span>
        </div>
        <p className="text-gray-400">{plan.description}</p>
      </div>
      <ul className="mb-8 flex flex-col gap-3">
        {plan.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-purple-400" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`mt-auto ${
          plan.popular
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
        Get Started
      </Button>
    </div>
  );
}
