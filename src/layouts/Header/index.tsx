"use client";

import { useState, useRef, useEffect } from "react";
import { Logo, DesktopNav, MobileMenu, HeaderActions } from "./components";
import { megaMenuConfig } from "./config";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });
  const [isHoveringMenu, setIsHoveringMenu] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md shadow-lg">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
          <Logo />
          <DesktopNav
            activeMegaMenu={activeMegaMenu}
            setActiveMegaMenu={setActiveMegaMenu}
            indicatorStyle={indicatorStyle}
            setIndicatorStyle={setIndicatorStyle}
            navRefs={navRefs}
            menuTimeoutRef={menuTimeoutRef}
            isHoveringMenu={isHoveringMenu}
            setIsHoveringMenu={setIsHoveringMenu}
            megaMenuRef={megaMenuRef as React.RefObject<HTMLDivElement>}
            megaMenus={megaMenuConfig}
          />
        </div>
        <HeaderActions isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
