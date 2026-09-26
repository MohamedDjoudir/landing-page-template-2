"use client";

import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

export function useSectionInView() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, isInView, controls };
}
