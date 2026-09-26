import Link from "next/link";
import { useTranslations } from "next-intl";
import type { MegaMenuColumn as MegaMenuColumnData } from "../types";

interface MegaMenuColumnProps {
  menuId: string;
  column: MegaMenuColumnData;
}

export function MegaMenuColumn({ menuId, column }: MegaMenuColumnProps) {
  const t = useTranslations(`Header.menus.${menuId}.columns.${column.id}`);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
        {t("title")}
      </h3>
      <ul className="space-y-4">
        {column.items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-900"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-800 text-purple-400 group-hover:bg-purple-900/20">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium text-white group-hover:text-purple-400">
                  {t(`items.${item.id}.title`)}
                </div>
                <div className="text-sm text-gray-400">
                  {t(`items.${item.id}.description`)}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
