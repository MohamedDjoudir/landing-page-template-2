"use client";

import { motion } from "framer-motion";
import { integrations, animationVariants } from "./config/integrations.config";
import { IntegrationCard } from "./components/IntegrationCard";

export default function Integrations() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-purple-400 font-medium mb-2">
            Seamless Connections
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Integrate with Your Favorite Tools
          </h2>
          <p className="text-gray-400 text-lg">
            SaasPro connects with the tools you already use, making it easy to
            incorporate into your existing workflow.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
          variants={animationVariants.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {integrations.map((integration, index) => (
            <IntegrationCard key={index} integration={integration} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            ...and many more integrations available
          </p>
          <a
            href="#"
            className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center"
          >
            View all integrations
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
