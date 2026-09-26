import Link from "next/link";
import { useTranslations } from "next-intl";
import type { NavLinkData } from "../types";

interface NavLinkProps {
  link: NavLinkData;
}

export function NavLink({ link }: NavLinkProps) {
  const t = useTranslations("Header.nav");

  return (
    <Link
      href={link.href}
      className="text-sm font-medium text-gray-300 hover:text-white px-2 py-1 rounded transition"
    >
      {t(link.id)}
    </Link>
  );
}
