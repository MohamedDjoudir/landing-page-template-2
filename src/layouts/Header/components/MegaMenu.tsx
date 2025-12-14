"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MegaMenuData } from "@/types";

interface MegaMenuProps {
  data: MegaMenuData;
}

export default function MegaMenu({ data }: MegaMenuProps) {
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
        {/* Menu columns */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.columns.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      href={item.href}
                      className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-900"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-800 text-purple-400 group-hover:bg-purple-900/20">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-medium text-white group-hover:text-purple-400">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-400">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured section */}
        <div className="col-span-1">
          <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
            <div className="relative h-40">
              <Image
                src={data.featured.imageSrc || "/placeholder.svg"}
                alt={data.featured.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            <div className="p-4">
              <h3 className="mb-1 font-medium text-white">
                {data.featured.title}
              </h3>
              <p className="mb-4 text-sm text-gray-400">
                {data.featured.description}
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Link href={data.featured.ctaLink}>
                  {data.featured.ctaText}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
