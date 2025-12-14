import { newsletterConfig } from "./config/newsletter.config";
import { NewsletterForm } from "./components/NewsletterForm";

export default function Newsletter() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />

      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(124, 58, 237, 0.15) 2px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container relative px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-gray-900/80 border border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl" />

            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600" />

            <div className="relative text-center mb-10">
              <span className="inline-block px-3 py-1 text-xs font-medium text-purple-400 bg-purple-900/30 rounded-full mb-3">
                {newsletterConfig.badge}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {newsletterConfig.headline}
              </h2>
              <p className="text-gray-300 max-w-lg mx-auto">
                {newsletterConfig.description}
              </p>
            </div>

            <NewsletterForm />

            <div className="mt-6 text-center text-sm text-gray-400">
              <p>{newsletterConfig.disclaimer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
