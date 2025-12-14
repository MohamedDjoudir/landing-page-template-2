import Image from "next/image";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
      <svg
        className="mb-4 h-8 w-8 text-purple-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="mb-6 flex-1 text-gray-300">{testimonial.quote}</p>
      <div className="flex items-center">
        <Image
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.author}
          width={48}
          height={48}
          className="mr-4 h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold">{testimonial.author}</p>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
