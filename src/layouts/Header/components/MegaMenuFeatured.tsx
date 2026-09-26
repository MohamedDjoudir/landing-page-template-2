import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";
import type { MegaMenuData } from "../types";

interface MegaMenuFeaturedProps {
  menu: MegaMenuData;
}

export function MegaMenuFeatured({ menu }: MegaMenuFeaturedProps) {
  const t = useTranslations(`Header.menus.${menu.id}.featured`);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
      <div className="relative h-40">
        <Image
          src={menu.featured.imageSrc}
          alt={t("title")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 font-medium text-white">{t("title")}</h3>
        <p className="mb-4 text-sm text-gray-400">{t("description")}</p>
        <Button
          asChild
          variant="outline"
          className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <Link href={menu.featured.href}>{t("cta")}</Link>
        </Button>
      </div>
    </div>
  );
}
