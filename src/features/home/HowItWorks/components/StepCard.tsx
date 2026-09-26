"use client";

import Image from "next/image";
import { motion, type useAnimation } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { Step } from "../types";
import { StepDetails } from "./StepDetails";
import { StepNumber } from "./StepNumber";

interface StepCardProps {
  step: Step;
  index: number;
  controls: ReturnType<typeof useAnimation>;
}

export function StepCard({ step, index, controls }: StepCardProps) {
  const t = useTranslations(`HowItWorks.steps.${step.id}`);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.8, delay: index * 0.2 },
        },
      }}
      initial="hidden"
      animate={controls}
      className={cn(
        "flex flex-col items-center gap-6 md:gap-12",
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <StepNumber number={step.number} />

      <div className="flex-1">
        <div className="relative bg-gray-900/90 backdrop-blur-md rounded-xl overflow-hidden md:max-w-[90%]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-transparent to-pink-800/20 opacity-50" />
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600" />

          <div className="p-6 md:p-8 relative">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <StepDetails title={t("title")} description={t("description")} />

              <div className="relative shrink-0 md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 z-10" />
                <Image
                  src={step.image}
                  alt={t("title")}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
