import { GradientBackdrop } from "@/components";
import { ArticleCard, BlogPreviewHeader } from "./components";
import { articles } from "./constants";

export default function BlogPreview() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <GradientBackdrop />

      <div className="container relative px-4 md:px-8">
        <BlogPreviewHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
