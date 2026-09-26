"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { animationVariants } from "../constants";
import type { Integration } from "../types";

interface IntegrationCardProps {
  integration: Integration;
}

export function IntegrationCard({ integration }: IntegrationCardProps) {
  const t = useTranslations("Integrations.categories");

  return (
    <motion.div className="group" variants={animationVariants.item}>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-purple-500/50 hover:bg-gray-800">
        <div className="relative mb-4 w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
          <div className="bg-gray-800 rounded-full p-2 w-12 h-12 flex items-center justify-center">
            <Image
              src={integration.logo}
              alt={integration.name}
              width={40}
              height={40}
              className="relative z-10 w-8 h-8 object-contain brightness-0 invert"
            />
          </div>
        </div>
        <h3 className="font-medium mb-1">{integration.name}</h3>
        <p className="text-xs text-gray-500">{t(integration.categoryId)}</p>
      </div>
    </motion.div>
  );
}
