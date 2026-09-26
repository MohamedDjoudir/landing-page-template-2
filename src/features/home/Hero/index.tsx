import { GradientBackdrop, GridPattern } from "@/components";
import { HeroContent, HeroImage } from "./components";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <GradientBackdrop />
      <GridPattern />

      <div className="container relative px-4 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
