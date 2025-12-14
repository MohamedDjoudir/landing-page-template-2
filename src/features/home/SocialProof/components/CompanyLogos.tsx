"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { companies, animationVariants } from "../config/social-proof.config";

export function CompanyLogos() {
  return (
    <motion.div
      className="flex flex-wrap justify-center items-center gap-8 mb-16"
      variants={animationVariants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {companies.map((company, index) => (
        <motion.div
          key={index}
          className="transition-all duration-300"
          variants={animationVariants.item}
        >
          <div className="bg-gray-800 rounded-lg p-4 w-[80px] h-[40px] flex items-center justify-center">
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={company.name}
              width={50}
              height={40}
              className="w-auto h-auto brightness-0 invert"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
