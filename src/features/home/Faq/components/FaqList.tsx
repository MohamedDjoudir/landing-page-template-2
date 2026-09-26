"use client";

import { faqs } from "../constants";
import { useFaqAccordion } from "../hooks";
import { FaqItem } from "./FaqItem";

export function FaqList() {
  const { activeIndex, toggle } = useFaqAccordion();

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FaqItem
          key={faq.id}
          faq={faq}
          isActive={activeIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}
