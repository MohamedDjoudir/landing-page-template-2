import Link from "next/link";
import { useTranslations } from "next-intl";
import { socialLinks } from "../constants";

export function FooterSocialLinks() {
  const t = useTranslations("Footer.social");

  return (
    <div className="mt-6 flex gap-4">
      {socialLinks.map((social) => (
        <Link
          key={social.id}
          href={social.href}
          className="text-gray-400 hover:text-white"
        >
          <social.icon className="h-5 w-5" />
          <span className="sr-only">{t(social.id)}</span>
        </Link>
      ))}
    </div>
  );
}
