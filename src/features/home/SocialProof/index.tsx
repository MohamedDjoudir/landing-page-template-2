"use client";

import { CompanyLogos } from "./components/CompanyLogos";
import { StatsGrid } from "./components/StatsGrid";

export default function SocialProof() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 rounded-full filter blur-[100px]" />
      </div>

      <div className="container relative px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-purple-400 font-medium mb-2">
            Trusted by professionals from top brands
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Join thousands of satisfied customers
          </h2>
        </div>

        <CompanyLogos />
        <StatsGrid />
      </div>
    </section>
  );
}
