"use client";

import { Logo } from "@/components";
import { DesktopNav, HeaderActions, MobileMenu } from "./components";
import { useMobileMenu } from "./hooks";

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md shadow-lg">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
          <Logo />
          <DesktopNav />
        </div>
        <HeaderActions isMenuOpen={isOpen} onToggleMenu={toggle} />
      </div>
      <MobileMenu isOpen={isOpen} onClose={close} />
    </header>
  );
}
