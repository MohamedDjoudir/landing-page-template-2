import Image from "next/image";
import Link from "next/link";
import type { BlogArticle } from "@/types";

interface ArticleCardProps {
  article: BlogArticle;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href="#" className="group">
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
          <div className="absolute top-4 left-4 bg-purple-600/90 text-white text-xs font-medium px-2 py-1 rounded">
            {article.category}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-400 mb-3">
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
