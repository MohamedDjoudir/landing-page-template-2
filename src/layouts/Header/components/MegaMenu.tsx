"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { MegaMenuData } from "../types";
import { MegaMenuColumn } from "./MegaMenuColumn";
import { MegaMenuFeatured } from "./MegaMenuFeatured";

interface MegaMenuProps {
  data: MegaMenuData;
}

export function MegaMenu({ data }: MegaMenuProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={cn(
        "max-w-4xl w-full px-4 py-6 transition-all duration-300 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.columns.map((column) => (
            <MegaMenuColumn key={column.id} menuId={data.id} column={column} />
          ))}
        </div>
        <div className="col-span-1">
          <MegaMenuFeatured menu={data} />
        </div>
      </div>
    </div>
  );
}
