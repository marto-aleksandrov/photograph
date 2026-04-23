import { AboutSection } from '@/components/sections/about-section';
import { FaqSection } from '@/components/sections/faq-section';
import { FinalCtaSection } from '@/components/sections/final-cta-section';
import { HeroSection } from '@/components/sections/hero-section';
import { IdentityStrip } from '@/components/sections/identity-strip';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { WorkflowSection } from '@/components/sections/workflow-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IdentityStrip />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <WorkflowSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
