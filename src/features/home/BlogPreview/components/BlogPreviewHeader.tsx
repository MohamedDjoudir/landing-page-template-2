import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";

export function BlogPreviewHeader() {
  const t = useTranslations("Blog");

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
        <p className="text-purple-400 font-medium mb-2">{t("eyebrow")}</p>
        <h2 className="text-3xl md:text-4xl font-bold">{t("title")}</h2>
      </div>
      <div className="mt-4 md:mt-0">
        <Button
          variant="link"
          className="text-purple-400 hover:text-purple-300 p-0 h-auto flex items-center gap-1"
        >
          {t("viewAll")}{" "}
          <ArrowRight className="h-4 w-4 ms-1 rtl:rotate-180" />
        </Button>
      </div>
    </div>
  );
}
