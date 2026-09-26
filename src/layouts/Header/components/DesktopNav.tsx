"use client";

import { megaMenus, desktopNavLinks } from "../constants";
import { useDesktopNav } from "../hooks";
import { MegaMenu } from "./MegaMenu";
import { MegaMenuArrow } from "./MegaMenuArrow";
import { MegaMenuPanel } from "./MegaMenuPanel";
import { NavLink } from "./NavLink";
import { NavTrigger } from "./NavTrigger";

export function DesktopNav() {
  const { activeMenu, arrowTranslateX, openMenu, scheduleClose, cancelClose } =
    useDesktopNav();
  const activeData = megaMenus.find((menu) => menu.id === activeMenu);

  return (
    <nav className="hidden md:flex items-center gap-6 relative">
      {activeData && <MegaMenuArrow translateX={arrowTranslateX} />}
      {megaMenus.map((menu) => (
        <NavTrigger
          key={menu.id}
          id={menu.id}
          isActive={activeMenu === menu.id}
          onEnter={openMenu}
          onLeave={scheduleClose}
        />
      ))}
      {desktopNavLinks.map((link) => (
        <NavLink key={link.id} link={link} />
      ))}
      {activeData && (
        <MegaMenuPanel onEnter={cancelClose} onLeave={scheduleClose}>
          <MegaMenu data={activeData} />
        </MegaMenuPanel>
      )}
    </nav>
  );
}
