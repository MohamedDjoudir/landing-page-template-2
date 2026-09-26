"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import type { FaqEntry } from "../types";

interface FaqItemProps {
  faq: FaqEntry;
}

export function FaqItem({ faq }: FaqItemProps) {
  const t = useTranslations(`Faq.items.${faq.id}`);

  return (
    <Accordion.Item
      value={faq.id}
      className="overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm"
    >
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-center justify-between p-6 text-start">
          <span className="font-medium text-lg">{t("question")}</span>
          <ChevronDown className="h-5 w-5 text-purple-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="animate-fade">
        <div className="px-6 pb-6 text-gray-400">{t("answer")}</div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
