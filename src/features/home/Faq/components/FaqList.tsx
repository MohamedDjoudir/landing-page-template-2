"use client";

import { useState } from "react";
import type { FAQ } from "@/types";
import { FaqItem } from "./FaqItem";

interface FaqListProps {
  faqs: FAQ[];
}

export function FaqList({ faqs }: FaqListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          faq={faq}
          index={index}
          isActive={activeIndex === index}
          onToggle={() => toggleFaq(index)}
        />
      ))}
    </div>
  );
}
