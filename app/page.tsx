import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessSection from '@/components/ProcessSection';
import IndustriesSection from '@/components/IndustriesSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import AboutTeaser from '@/components/AboutTeaser';
import FeaturedServices from '@/components/FeaturedServices';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />

      <AboutTeaser />

      <section className="section bg-gradient-to-b from-white to-brand-50/40">
        <div className="container-x">
          <div className="grid items-end gap-6 md:grid-cols-2">
            <div>
              <Reveal>
                <span className="eyebrow">Featured practices</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="h2 mt-5 text-balance">
                  Where teams turn to us <span className="gradient-text">first</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="flex flex-col items-start gap-4 md:items-end">
                <p className="max-w-md text-ink-700 md:text-right">
                  Our four most-requested practices — engineered to ship outcomes fast.
                </p>
                <Link href="/services" className="btn-ghost">
                  See all services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-14">
            <FeaturedServices />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid items-end gap-6 md:grid-cols-2">
            <div>
              <Reveal>
                <span className="eyebrow">What we do</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="h2 mt-5 text-balance">
                  Full-stack technology services, <span className="gradient-text">end to end</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="flex flex-col items-start gap-4 md:items-end">
                <p className="max-w-md text-ink-700 md:text-right">
                  From advisory through engineering and operations — one accountable partner across the lifecycle.
                </p>
                <Link href="/services" className="btn-ghost">
                  See all services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-14">
            <ServicesGrid limit={6} showCta />
          </div>
        </div>
      </section>

      <ProcessSection />
      <IndustriesSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
