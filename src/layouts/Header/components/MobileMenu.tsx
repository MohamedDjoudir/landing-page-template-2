import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";
import { mobileMenuSections } from "../constants";
import { MobileMainLinks } from "./MobileMainLinks";
import { MobileMenuSection } from "./MobileMenuSection";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const common = useTranslations("Common");

  if (!isOpen) return null;

  return (
    <>
      <div
        className="md:hidden fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      <div className="md:hidden fixed top-16 inset-x-0 z-50 animate-fade max-h-[85vh] overflow-y-auto">
        <div className="mx-3 mt-2 rounded-xl bg-gradient-to-b from-[#1a1a2e] to-[#16161e] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]">
          <nav className="flex flex-col p-3">
            {mobileMenuSections.map((section) => (
              <MobileMenuSection
                key={section.id}
                section={section}
                onNavigate={onClose}
              />
            ))}
            <MobileMainLinks onNavigate={onClose} />
            <Button
              className="w-full py-3 my-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm hover:from-purple-700 hover:to-pink-600 shadow-lg shadow-purple-700/25 transition-all duration-200 flex items-center justify-center gap-2 font-medium"
              onClick={onClose}
            >
              {common("getStarted")}
              <ChevronRight className="h-3 w-3 rtl:rotate-180" />
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
}
