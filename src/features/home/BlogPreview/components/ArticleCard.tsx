import Image from "next/image";
import Link from "next/link";
import { useFormatter, useTranslations } from "next-intl";
import type { BlogArticle } from "../types";

interface ArticleCardProps {
  article: BlogArticle;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const t = useTranslations("Blog");
  const item = useTranslations(`Blog.articles.${article.id}`);
  const format = useFormatter();

  return (
    <Link href="#" className="group">
      <div className="bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500/5">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.image}
            alt={item("title")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute top-4 start-4 bg-purple-600/90 text-white text-xs font-medium px-2 py-1 rounded">
            {item("category")}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-400 mb-3">
            <span>
              {format.dateTime(new Date(article.publishedAt), {
                year: "numeric",
                month: "short",
                day: "numeric",
                timeZone: "UTC",
              })}
            </span>
            <span className="mx-2" aria-hidden="true">
              •
            </span>
            <span>{t("readTime", { minutes: article.readMinutes })}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
            {item("title")}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {item("excerpt")}
          </p>
        </div>
      </div>
    </Link>
  );
}
