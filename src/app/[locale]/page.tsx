import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/layouts";
import {
  Hero,
  SocialProof,
  Features,
  HowItWorks,
  Testimonials,
  Pricing,
  ComparisonTable,
  Integrations,
  Faq,
  BlogPreview,
  Newsletter,
  Cta,
} from "@/features/home";
import { routing } from "@/i18n";
import type { LocaleParams } from "@/types";

export default async function LandingPage({ params }: LocaleParams) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <div className="flex flex-col bg-gray-950 text-gray-100 min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <ComparisonTable />
      <Integrations />
      <Faq />
      <BlogPreview />
      <Newsletter />
      <Cta />
      <Footer />
    </div>
  );
}
