import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";
import { FeaturesList } from "./components";

export default function Cta() {
  const t = useTranslations("Cta");
  const common = useTranslations("Common");

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gray-950" />

      <div className="container relative px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-8 md:p-10 relative overflow-hidden shadow-lg">
            <div className="absolute -top-32 -end-32 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl" />

            <div className="absolute start-0 inset-y-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  {t("headline")}
                </h2>
                <p className="text-gray-300">{t("description")}</p>
              </div>
              <div>
                <Button className="h-12 px-6 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md">
                  {common("getStarted")}{" "}
                  <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
                </Button>
              </div>
            </div>

            <FeaturesList />
          </div>
        </div>
      </div>
    </section>
  );
}
