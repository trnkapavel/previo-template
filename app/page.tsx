import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { StatsSection } from '@/components/stats';
import { ProductCards } from '@/components/product-cards';
import { SupportSection } from '@/components/support';
import { Testimonial } from '@/components/testimonial';
import { WhyPrevio } from '@/components/why-previo';
import { FaqSection } from '@/components/faq';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <Hero />
      <StatsSection />
      <ProductCards />
      <Testimonial />
      <SupportSection />
      <WhyPrevio />
      <FaqSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}
