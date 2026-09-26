import Image from "next/image";
import { useTranslations } from "next-intl";
import { heroImage } from "../constants";

export function HeroImage() {
  const t = useTranslations("Hero");

  return (
    <div className="mt-16 relative">
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-70 blur" />
      <div className="relative rounded-xl border border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
        <Image
          src={heroImage.src}
          alt={t("imageAlt")}
          width={heroImage.width}
          height={heroImage.height}
          className="w-full h-auto opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
      </div>
    </div>
  );
}
