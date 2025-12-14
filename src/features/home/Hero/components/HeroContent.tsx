import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroConfig } from "../config/hero.config";

export function HeroContent() {
  return (
    <>
      <div className="mb-6 mx-auto max-w-4xl inline-block rounded-full bg-gray-800 px-4 py-1 text-sm">
        <span className="text-purple-400">{heroConfig.badge.label}</span>{" "}
        {heroConfig.badge.text}
      </div>
      <h1 className="mb-6 mx-auto max-w-4xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
        {heroConfig.headline}
      </h1>
      <p className="mb-10 mx-auto max-w-3xl text-xl text-gray-400 md:text-2xl">
        {heroConfig.description}
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button className="bg-purple-600 text-white hover:bg-purple-700 h-12 px-8 text-base">
          {heroConfig.primaryButton.text}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white h-12 px-8 text-base"
        >
          {heroConfig.secondaryButton.text}
        </Button>
      </div>
    </>
  );
}
