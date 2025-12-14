import { GridPattern } from "./components/GridPattern";
import { HeroContent } from "./components/HeroContent";
import { HeroImage } from "./components/HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      {/* Background SVG pattern */}
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
