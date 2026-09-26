"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { faqs } from "../constants";
import { FaqItem } from "./FaqItem";

export function FaqList() {
  return (
    <Accordion.Root type="single" collapsible className="space-y-4">
      {faqs.map((faq) => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </Accordion.Root>
  );
}
