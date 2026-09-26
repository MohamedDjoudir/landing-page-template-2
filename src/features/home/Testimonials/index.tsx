import { useTranslations } from "next-intl";
import { GradientBackdrop, SectionHeader } from "@/components";
import { TestimonialCard } from "./components";
import { testimonials } from "./constants";

export default function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section id="testimonials" className="relative py-20 md:py-32">
      <GradientBackdrop />

      <div className="container relative px-4 md:px-8">
        <SectionHeader
          size="narrow"
          title={t("title")}
          description={t("description")}
        />
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
