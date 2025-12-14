import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Laptop,
  Users,
  BarChart3,
  FileText,
  BookOpen,
  MessageSquare,
  LayoutGrid,
  CreditCard,
  Star,
  LogIn,
  ChevronRight,
} from "lucide-react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
}

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps) {
  if (!isMenuOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="md:hidden fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu container */}
      <div className="md:hidden fixed top-16 left-0 right-0 z-50 animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
        <div
          className="mx-3 mt-2 rounded-xl border border-purple-900/30"
          style={{
            background: "linear-gradient(180deg, #1a1a2e 0%, #16161e 100%)",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
          }}
        >
          <nav className="flex flex-col p-3">
            {/* Products section */}
            <div className="mb-3 pb-3 border-b border-gray-800/50">
              <div className="flex items-center mb-2 px-1">
                <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-2"></div>
                <h3 className="font-semibold text-white text-base">Products</h3>
              </div>
              <div className="space-y-0.5">
                <Link
                  href="#"
                  className="flex items-center py-2 px-3 text-gray-200 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Laptop className="h-4 w-4 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                  <div>
                    <div className="font-medium text-sm">Dashboard</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      Complete overview
                    </div>
                  </div>
                  <ChevronRight className="ml-auto h-3 w-3 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center py-2 px-3 text-gray-200 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Users className="h-4 w-4 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                  <div>
                    <div className="font-medium text-sm">Team Management</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      Manage your team
                    </div>
                  </div>
                  <ChevronRight className="ml-auto h-3 w-3 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center py-2 px-3 text-gray-200 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BarChart3 className="h-4 w-4 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                  <div>
                    <div className="font-medium text-sm">Analytics</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      Data visualization
                    </div>
                  </div>
                  <ChevronRight className="ml-auto h-3 w-3 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </Link>
              </div>
            </div>

            {/* Resources section */}
            <div className="mb-3 pb-3 border-b border-gray-800/50">
              <div className="flex items-center mb-2 px-1">
                <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-2"></div>
                <h3 className="font-semibold text-white text-base">
                  Resources
                </h3>
              </div>
              <div className="space-y-0.5">
                <Link
                  href="#"
                  className="flex items-center py-2 px-3 text-gray-200 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FileText className="h-4 w-4 text-pink-400 mr-2 group-hover:text-pink-300 transition-colors" />
                  <div>
                    <div className="font-medium text-sm">Documentation</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      Guides and references
                    </div>
                  </div>
                  <ChevronRight className="ml-auto h-3 w-3 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center py-2 px-3 text-gray-200 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BookOpen className="h-4 w-4 text-pink-400 mr-2 group-hover:text-pink-300 transition-colors" />
                  <div>
                    <div className="font-medium text-sm">Tutorials</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      Step-by-step guides
                    </div>
                  </div>
                  <ChevronRight className="ml-auto h-3 w-3 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center py-2 px-3 text-gray-200 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageSquare className="h-4 w-4 text-pink-400 mr-2 group-hover:text-pink-300 transition-colors" />
                  <div>
                    <div className="font-medium text-sm">Blog</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      Latest news and tips
                    </div>
                  </div>
                  <ChevronRight className="ml-auto h-3 w-3 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </Link>
              </div>
            </div>

            {/* Main navigation links */}
            <div className="mb-3 pb-3 border-b border-gray-800/50">
              <div className="grid grid-cols-2 gap-1">
                <Link
                  href="#features"
                  className="flex items-center py-2 px-3 text-gray-200 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LayoutGrid className="h-4 w-4 text-indigo-400 mr-2 group-hover:text-indigo-300 transition-colors" />
                  <span className="font-medium text-sm">Features</span>
                </Link>
                <Link
                  href="#pricing"
                  className="flex items-center py-2 px-3 text-gray-200 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <CreditCard className="h-4 w-4 text-indigo-400 mr-2 group-hover:text-indigo-300 transition-colors" />
                  <span className="font-medium text-sm">Pricing</span>
                </Link>
                <Link
                  href="#testimonials"
                  className="flex items-center py-2 px-3 text-gray-200 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Star className="h-4 w-4 text-indigo-400 mr-2 group-hover:text-indigo-300 transition-colors" />
                  <span className="font-medium text-sm">Testimonials</span>
                </Link>
                <div
                  className="flex items-center py-2 px-3 text-gray-200 rounded-lg hover:bg-gray-800 transition-all duration-200 group cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn className="h-4 w-4 text-gray-400 mr-2 group-hover:text-gray-300 transition-colors" />
                  <span className="font-medium text-sm">Log in</span>
                </div>
              </div>
            </div>

            {/* Get Started button */}
            <Button
              className="w-full py-3 my-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm hover:from-purple-700 hover:to-pink-600 shadow-lg shadow-purple-700/25 transition-all duration-200 flex items-center justify-center gap-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
              <ChevronRight className="h-3 w-3" />
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
}
