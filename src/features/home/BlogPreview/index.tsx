import { articles } from "./config/articles.config";
import { ArticleCard } from "./components/ArticleCard";
import { SectionHeader } from "./components/SectionHeader";

export default function BlogPreview() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      <div className="container relative px-4 md:px-8">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
