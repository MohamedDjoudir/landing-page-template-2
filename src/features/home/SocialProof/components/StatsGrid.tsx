import { useTranslations } from "next-intl";
import { stats } from "../constants";

export function StatsGrid() {
  const t = useTranslations("SocialProof.stats");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
      {stats.map((stat) => (
        <div key={stat.id} className="text-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur-sm" />
            <div className="relative bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {t(`${stat.id}.value`)}
              </div>
              <p className="text-gray-400">{t(`${stat.id}.label`)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
