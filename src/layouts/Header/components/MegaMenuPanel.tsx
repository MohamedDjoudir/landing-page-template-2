import type { ReactNode } from "react";

interface MegaMenuPanelProps {
  children: ReactNode;
  onEnter: () => void;
  onLeave: () => void;
}

export function MegaMenuPanel({
  children,
  onEnter,
  onLeave,
}: MegaMenuPanelProps) {
  return (
    <div
      className="absolute inset-x-0 top-[calc(100%+12px)] z-50 flex min-w-max justify-center bg-[rgba(17,15,31,0.95)] p-8 backdrop-blur-[8px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="absolute start-0 top-0 z-[1] h-1 w-full rounded-t bg-gradient-to-r from-[#a21caf] to-pink-500 rtl:bg-gradient-to-l" />
      <div className="relative z-[2] w-full">{children}</div>
    </div>
  );
}
