import Link from "next/link";
import { useTranslations } from "next-intl";
import type { FooterColumnData } from "../types";

interface FooterLinkColumnProps {
  column: FooterColumnData;
}

export function FooterLinkColumn({ column }: FooterLinkColumnProps) {
  const t = useTranslations(`Footer.columns.${column.id}`);

  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase text-gray-300">
        {t("title")}
      </h3>
      <ul className="flex flex-col gap-2">
        {column.links.map((link) => (
          <li key={link.id}>
            <Link href={link.href} className="text-gray-400 hover:text-white">
              {t(`links.${link.id}`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
