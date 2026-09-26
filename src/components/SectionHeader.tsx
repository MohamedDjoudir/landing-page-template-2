import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const SIZES = {
  wide: {
    wrapper: "max-w-3xl mx-auto text-center mb-16",
    eyebrow: "text-purple-400 font-medium mb-2",
    title: "text-3xl md:text-4xl font-bold mb-6",
    description: "text-gray-400 text-lg",
  },
  narrow: {
    wrapper: "mx-auto max-w-2xl text-center",
    eyebrow: "text-purple-400 font-medium mb-2",
    title: "mb-4 text-3xl font-bold tracking-tight md:text-4xl",
    description: "mb-16 text-lg text-gray-400",
  },
  compact: {
    wrapper: "text-center mb-12",
    eyebrow: "text-lg text-purple-400 font-medium mb-2",
    title: "text-2xl md:text-3xl font-bold",
    description: "",
  },
} as const;

interface SectionHeaderProps {
  title: ReactNode;
  eyebrow?: string;
  description?: string;
  size?: keyof typeof SIZES;
  className?: string;
}

export function SectionHeader({
  title,
  eyebrow,
  description,
  size = "wide",
  className,
}: SectionHeaderProps) {
  const styles = SIZES[size];

  return (
    <div className={cn(styles.wrapper, className)}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
