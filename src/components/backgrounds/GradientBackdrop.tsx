import { cn } from "@/lib/utils";

const TONES = {
  centered: "from-gray-950 via-gray-900 to-gray-950",
  top: "from-gray-900 to-gray-950",
} as const;

interface GradientBackdropProps {
  tone?: keyof typeof TONES;
  className?: string;
}

export function GradientBackdrop({
  tone = "centered",
  className,
}: GradientBackdropProps) {
  return (
    <div
      className={cn("absolute inset-0 bg-gradient-to-b", TONES[tone], className)}
    />
  );
}
