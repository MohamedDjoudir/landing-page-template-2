import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderActionsProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
}

export default function HeaderActions({
  isMenuOpen,
  setIsMenuOpen,
}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="hidden md:block text-sm font-medium text-gray-300 hover:text-white px-2 py-1 rounded hover:bg-gray-900 transition">
        Log in
      </div>
      <Button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 shadow-md">
        Get Started
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-gray-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    </div>
  );
}
