"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { CheckCircle, ChevronRight } from "lucide-react";
import type { Step } from "@/types";

interface StepCardProps {
  step: Step;
  index: number;
  mainControls: ReturnType<typeof useAnimation>;
}

export function StepCard({ step, index, mainControls }: StepCardProps) {
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
      animate={mainControls}
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-6 md:gap-12`}
    >
      {/* Step number */}
      <div className="relative shrink-0 z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 rounded-full border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-900/20">
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {step.number}
          </span>
        </div>
        {/* Pulsing circle animation */}
        <div className="absolute -inset-3 z-0">
          <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping opacity-50" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-sm" />
        </div>
      </div>

      {/* Content card */}
      <div className="flex-1">
        <div className="relative bg-gray-900/90 backdrop-blur-md rounded-xl overflow-hidden md:max-w-[90%]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-transparent to-pink-800/20 opacity-50" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600" />

          <div className="p-6 md:p-8 relative">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>

                <ul className="mt-5 space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-300">
                        Key feature #{item} for this step
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn more about this step{" "}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="relative shrink-0 md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 z-10" />
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
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
