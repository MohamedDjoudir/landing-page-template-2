"use client";

import { useEffect, useState } from "react";
import type { Particle } from "../types";
import { createParticle } from "../utils";

export function useParticles(count: number) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: count }, (_, id) => createParticle(id)));
  }, [count]);

  return particles;
}
