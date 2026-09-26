import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Testimonial } from "../types";
import { QuoteIcon } from "./QuoteIcon";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const t = useTranslations(`Testimonials.items.${testimonial.id}`);

  return (
    <div className="flex flex-col rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
      <QuoteIcon />
      <p className="mb-6 flex-1 text-gray-300">{t("quote")}</p>
      <div className="flex items-center">
        <Image
          src={testimonial.avatar}
          alt={t("author")}
          width={48}
          height={48}
          className="me-4 h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold">{t("author")}</p>
          <p className="text-sm text-gray-400">{t("role")}</p>
        </div>
      </div>
    </div>
  );
}
