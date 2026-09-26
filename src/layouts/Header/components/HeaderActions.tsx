import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components";
import { Button } from "@/components/ui";

interface HeaderActionsProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function HeaderActions({
  isMenuOpen,
  onToggleMenu,
}: HeaderActionsProps) {
  const t = useTranslations("Header");
  const common = useTranslations("Common");

  return (
    <div className="flex items-center gap-4">
      <Link
        href="#"
        className="hidden md:block text-sm font-medium text-gray-300 hover:text-white px-2 py-1 rounded hover:bg-gray-900 transition"
      >
        {t("login")}
      </Link>
      <LocaleSwitcher />
      <Button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 shadow-md">
        {common("getStarted")}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-gray-300"
        onClick={onToggleMenu}
        aria-label={t("toggleMenu")}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    </div>
  );
}
