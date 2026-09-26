import { useTranslations } from "next-intl";
import { Logo } from "@/components";
import { FooterSocialLinks } from "./FooterSocialLinks";

export function FooterBrand() {
  const t = useTranslations("Footer");

  return (
    <div>
      <Logo variant="solid" />
      <p className="mt-4 text-gray-400">{t("tagline")}</p>
      <FooterSocialLinks />
    </div>
  );
}
