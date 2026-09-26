"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MEGA_MENU_CLOSE_DELAY_MS } from "../constants";
import type { MegaMenuId } from "../types";

export function useMegaMenu() {
  const [activeMenu, setActiveMenu] = useState<MegaMenuId | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);

  const open = useCallback(
    (id: MegaMenuId) => {
      cancelClose();
      setActiveMenu(id);
    },
    [cancelClose]
  );

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimeout.current = setTimeout(
      () => setActiveMenu(null),
      MEGA_MENU_CLOSE_DELAY_MS
    );
  }, [cancelClose]);

  useEffect(() => cancelClose, [cancelClose]);

  return { activeMenu, open, scheduleClose, cancelClose };
}
