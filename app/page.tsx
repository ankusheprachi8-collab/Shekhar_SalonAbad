import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import BrandStrip from "@/components/BrandStrip";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrandStrip />
      <AboutSection />
      <ServicesGrid />
      <TestimonialSection />
      <CTASection />
    </main>
  );
}