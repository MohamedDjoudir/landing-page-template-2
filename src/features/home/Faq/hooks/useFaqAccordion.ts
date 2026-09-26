"use client";

import { useState } from "react";

export function useFaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setActiveIndex((current) => (current === index ? null : index));

  return { activeIndex, toggle };
}
