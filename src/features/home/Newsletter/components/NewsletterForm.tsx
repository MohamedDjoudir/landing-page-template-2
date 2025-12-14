import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletterConfig } from "../config/newsletter.config";

export function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
      <div className="relative flex-grow">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="email"
          placeholder={newsletterConfig.placeholder}
          className="pl-10 bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white h-12 rounded-lg"
        />
      </div>
      <Button className="h-12 px-6 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
        {newsletterConfig.buttonText}
      </Button>
    </form>
  );
}
