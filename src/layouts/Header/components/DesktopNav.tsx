import Link from "next/link";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";
import type { RefObject } from "react";
import type { MegaMenuData } from "@/types";

interface DesktopNavProps {
  activeMegaMenu: string | null;
  setActiveMegaMenu: (menu: string | null) => void;
  indicatorStyle: { width: number; left: number; opacity: number };
  setIndicatorStyle: React.Dispatch<
    React.SetStateAction<{ width: number; left: number; opacity: number }>
  >;
  navRefs: RefObject<Record<string, HTMLDivElement | null>>;
  menuTimeoutRef: RefObject<NodeJS.Timeout | null>;
  isHoveringMenu: boolean;
  setIsHoveringMenu: (hover: boolean) => void;
  megaMenuRef: RefObject<HTMLDivElement>;
  megaMenus: Record<string, MegaMenuData>;
}

export default function DesktopNav({
  activeMegaMenu,
  setActiveMegaMenu,
  indicatorStyle,
  setIndicatorStyle,
  navRefs,
  menuTimeoutRef,
  isHoveringMenu,
  setIsHoveringMenu,
  megaMenuRef,
  megaMenus,
}: DesktopNavProps) {
  const handleMouseEnter = (menuId: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMegaMenu(menuId);
    const navElement = navRefs.current?.[menuId];
    if (navElement) {
      const rect = navElement.getBoundingClientRect();
      const parentRect = navElement.parentElement?.getBoundingClientRect() || {
        left: 0,
      };
      setIndicatorStyle({
        width: rect.width,
        left: rect.left - parentRect.left,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    if (!isHoveringMenu) {
      menuTimeoutRef.current = setTimeout(() => {
        setActiveMegaMenu(null);
        setIndicatorStyle(
          (prev: { width: number; left: number; opacity: number }) => ({
            ...prev,
            opacity: 0,
          })
        );
      }, 300);
    }
  };

  const handleMenuMouseEnter = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setIsHoveringMenu(true);
  };

  const handleMenuMouseLeave = () => {
    setIsHoveringMenu(false);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }, 300);
  };

  const arrowLeft = indicatorStyle.left + indicatorStyle.width / 2 - 14;

  return (
    <nav className="hidden md:flex items-center gap-6 relative">
      {activeMegaMenu && (
        <div
          className="pointer-events-none absolute z-50"
          style={{
            top: "100%",
            left: `${arrowLeft}px`,
            width: "18px",
            height: "13px",
            transition:
              "left 300ms cubic-bezier(0.4,0,0.2,1), top 300ms cubic-bezier(0.4,0,0.2,1)",
            background: "#a21caf",
            clipPath: "polygon(50% 0%, 0 100%, 100% 100%)",
          }}
        />
      )}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("products")}
        onMouseLeave={handleMouseLeave}
        ref={(el) => {
          navRefs.current && (navRefs.current.products = el);
        }}
      >
        <button
          className={cn(
            "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded hover:text-white transition",
            activeMegaMenu === "products" ? "text-white" : "text-gray-300"
          )}
        >
          Products
        </button>
      </div>
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("resources")}
        onMouseLeave={handleMouseLeave}
        ref={(el) => {
          navRefs.current && (navRefs.current.resources = el);
        }}
      >
        <button
          className={cn(
            "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded hover:text-white transition",
            activeMegaMenu === "resources" ? "text-white" : "text-gray-300"
          )}
        >
          Resources
        </button>
      </div>
      <Link
        href="#pricing"
        className="text-sm font-medium text-gray-300 hover:text-white px-2 py-1 rounded transition"
      >
        Pricing
      </Link>
      <Link
        href="#testimonials"
        className="text-sm font-medium text-gray-300 hover:text-white px-2 py-1 rounded transition"
      >
        Testimonials
      </Link>
      {activeMegaMenu && (
        <div
          ref={megaMenuRef}
          className="absolute left-0 right-0"
          style={{
            top: "calc(100% + 12px)",
            zIndex: 50,
            background: "rgba(17, 15, 31, 0.95)",
            backdropFilter: "blur(8px)",
            display: "flex",
            justifyContent: "center",
            minWidth: "max-content",
            padding: "2rem 2rem",
            borderTop: "0px solid transparent",
            position: "absolute",
          }}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "4px",
              background: "linear-gradient(90deg, #a21caf 0%, #ec4899 100%)",
              borderRadius: "4px 4px 0 0",
              zIndex: 1,
            }}
          />
          <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
            <MegaMenu
              data={megaMenus[activeMegaMenu as keyof typeof megaMenus]}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
