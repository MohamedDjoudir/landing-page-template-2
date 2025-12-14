"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps {
  isInView: boolean;
}

export function CtaButton({ isInView }: CtaButtonProps) {
  return (
    <motion.div
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="relative inline-block">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-md opacity-70" />
        <a
          href="#"
          className="relative inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white font-medium text-lg hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-900/30"
        >
          Transform Your Workflow <ArrowRight className="h-5 w-5" />
        </a>
      </div>

      <p className="mt-4 text-gray-400">
        Join thousands of teams already using SaasPro
      </p>
    </motion.div>
  );
}
