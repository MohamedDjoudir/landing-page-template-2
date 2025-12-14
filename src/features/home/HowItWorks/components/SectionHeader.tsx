"use client";

import { motion } from "framer-motion";

export function SectionHeader() {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block px-4 py-1.5 text-xs font-medium text-purple-300 bg-purple-950/50 rounded-full backdrop-blur-sm mb-4">
          Effortless Integration
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          How SaasPro{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Transforms
          </span>{" "}
          Your Workflow
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A seamless four-step process that revolutionizes the way your team
          works
        </p>

        {/* Animated underline */}
        <div className="relative w-40 h-1 mx-auto mt-6">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
