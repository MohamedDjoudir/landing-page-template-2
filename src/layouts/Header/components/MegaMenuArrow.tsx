interface MegaMenuArrowProps {
  translateX: number;
}

export function MegaMenuArrow({ translateX }: MegaMenuArrowProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute start-0 top-full z-50 h-[13px] w-[18px] bg-[#a21caf] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
      style={{
        transform: `translateX(${translateX}px)`,
        clipPath: "polygon(50% 0%, 0 100%, 100% 100%)",
      }}
    />
  );
}
