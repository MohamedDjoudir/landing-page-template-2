import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SectionHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
        <p className="text-purple-400 font-medium mb-2">Latest Articles</p>
        <h2 className="text-3xl md:text-4xl font-bold">From Our Blog</h2>
      </div>
      <div className="mt-4 md:mt-0">
        <Button
          variant="link"
          className="text-purple-400 hover:text-purple-300 p-0 h-auto flex items-center gap-1"
        >
          View all articles <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
