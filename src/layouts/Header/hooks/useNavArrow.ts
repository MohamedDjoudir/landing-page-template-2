"use client";

import { useCallback, useState } from "react";
import { getArrowTranslateX } from "../utils";

export function useNavArrow() {
  const [translateX, setTranslateX] = useState(0);

  const pointAt = useCallback((trigger: HTMLElement) => {
    const container = trigger.parentElement;
    if (container) {
      setTranslateX(getArrowTranslateX(trigger, container));
    }
  }, []);

  return { translateX, pointAt };
}
