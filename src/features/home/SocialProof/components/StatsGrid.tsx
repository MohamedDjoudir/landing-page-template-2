import { stats } from "../config/social-proof.config";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur-sm" />
            <div className="relative bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
