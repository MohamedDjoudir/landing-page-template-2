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
  Cta,
} from "@/features/home";

export default function LandingPage() {
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
      <Cta />
      <Footer />
    </div>
  );
}
