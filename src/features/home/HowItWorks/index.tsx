"use client";

import {
  CtaButton,
  FloatingParticles,
  GridOverlay,
  HowItWorksHeader,
  StepCard,
} from "./components";
import { steps } from "./constants";
import { useSectionInView } from "./hooks";

export default function HowItWorks() {
  const { ref, isInView, controls } = useSectionInView();

  return (
    <section
      id="how-it-works"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
      ref={ref}
    >
      <FloatingParticles />
      <GridOverlay />

      <div className="container relative px-4 md:px-8 z-10">
        <HowItWorksHeader />

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute inset-y-0 inset-x-0 mx-auto w-1 bg-gradient-to-b from-purple-600/70 via-pink-600/70 to-purple-600/70 rounded-full" />

          <div className="space-y-20 md:space-y-32">
            {steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                controls={controls}
              />
            ))}
          </div>
        </div>

        <CtaButton isInView={isInView} />
      </div>
    </section>
  );
}
