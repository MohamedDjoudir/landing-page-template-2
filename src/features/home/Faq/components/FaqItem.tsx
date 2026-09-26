"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { FaqEntry } from "../types";

interface FaqItemProps {
  faq: FaqEntry;
  isActive: boolean;
  onToggle: () => void;
}

export function FaqItem({ faq, isActive, onToggle }: FaqItemProps) {
  const t = useTranslations(`Faq.items.${faq.id}`);

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-sm">
      <button
        className="flex justify-between items-center w-full p-6 text-start"
        onClick={onToggle}
      >
        <span className="font-medium text-lg">{t("question")}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-purple-400 transition-transform duration-300",
            isActive ? "transform rotate-180" : ""
          )}
        />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-400">{t("answer")}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
