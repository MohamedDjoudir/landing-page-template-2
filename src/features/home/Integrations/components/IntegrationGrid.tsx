"use client";

import { motion } from "framer-motion";
import { animationVariants, integrations } from "../constants";
import { IntegrationCard } from "./IntegrationCard";

export function IntegrationGrid() {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
      variants={animationVariants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {integrations.map((integration) => (
        <IntegrationCard key={integration.name} integration={integration} />
      ))}
    </motion.div>
  );
}
