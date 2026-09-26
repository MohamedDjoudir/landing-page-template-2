import { pricingTiers } from "../constants";
import { TierColumn } from "./TierColumn";

export function TableHeader() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      <div className="col-span-1" />
      {pricingTiers.map((tier) => (
        <TierColumn key={tier.id} tier={tier} />
      ))}
    </div>
  );
}
