"use client";

import { motion } from "framer-motion";
import { PARTICLE_COUNT } from "../constants";
import { useParticles } from "../hooks";

export function FloatingParticles() {
  const particles = useParticles(PARTICLE_COUNT);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-xl"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            x: [0, particle.driftX],
            y: [0, particle.driftY],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
