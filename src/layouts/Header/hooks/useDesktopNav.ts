"use client";

import { useCallback } from "react";
import type { MegaMenuId } from "../types";
import { useMegaMenu } from "./useMegaMenu";
import { useNavArrow } from "./useNavArrow";

export function useDesktopNav() {
  const { activeMenu, open, scheduleClose, cancelClose } = useMegaMenu();
  const { translateX, pointAt } = useNavArrow();

  const openMenu = useCallback(
    (id: MegaMenuId, trigger: HTMLElement) => {
      pointAt(trigger);
      open(id);
    },
    [open, pointAt]
  );

  return {
    activeMenu,
    arrowTranslateX: translateX,
    openMenu,
    scheduleClose,
    cancelClose,
  };
}
