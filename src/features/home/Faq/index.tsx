import { faqs } from "./config/faq.config";
import { FaqList } from "./components/FaqList";

export default function Faq() {
  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pink-900/10 rounded-full blur-3xl" />

      <div className="container relative px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-purple-400 font-medium mb-2">
            Questions & Answers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about SaasPro. If you can&apos;t
            find what you&apos;re looking for, feel free to contact our support
            team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FaqList faqs={faqs} />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Still have questions?{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
