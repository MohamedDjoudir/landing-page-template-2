import { plans } from "./config/plans.config";
import { PricingCard } from "./components/PricingCard";
import { BackgroundPattern } from "./components/BackgroundPattern";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-32">
      <BackgroundPattern />

      <div className="container relative px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mb-16 text-lg text-gray-400">
            Choose the plan that works best for your business
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
