import type { Particle } from "../types";

export function createParticle(id: number): Particle {
  return {
    id,
    size: Math.random() * 100 + 50,
    left: Math.random() * 100,
    top: Math.random() * 100,
    driftX: Math.random() * 100 - 50,
    driftY: Math.random() * 100 - 50,
    duration: Math.random() * 20 + 20,
  };
}
