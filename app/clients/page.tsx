import PageHeader from '@/components/PageHeader';
import MarqueeLogos from '@/components/MarqueeLogos';
import Testimonials from '@/components/Testimonials';
import StatsBlock from '@/components/StatsBlock';
import IndustriesSection from '@/components/IndustriesSection';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import { CLIENT_LOGOS } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'Clients — TEKinspire' };

const caseStudies = [
  {
    sector: 'Healthcare',
    title: 'Analytics platform launch for a Fortune 500 payer',
    impact: ['90+ dashboards live', '3x faster reporting', '$2.1M annual savings'],
    tags: ['Snowflake', 'dbt', 'Power BI', 'Azure'],
    image: '/images/case-healthcare.jpg',
  },
  {
    sector: 'Fintech',
    title: 'Cloud re-platforming for a mid-market lender',
    impact: ['28% lower run-rate', '99.99% uptime', '3x performance'],
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Go'],
    image: '/images/case-fintech.jpg',
  },
  {
    sector: 'Insurance',
    title: 'AI-assisted underwriting for a global carrier',
    impact: ['62% faster quotes', '14% lift in conversion', 'NIST-aligned'],
    tags: ['LLMs', 'Python', 'MLOps', 'GCP'],
    image: '/images/case-insurance.jpg',
  },
  {
    sector: 'Retail',
    title: 'Headless commerce build for a digital-first brand',
    impact: ['41% mobile RPV uplift', '2.4s LCP', 'Black-Friday ready'],
    tags: ['Next.js', 'Shopify Hydrogen', 'Algolia'],
    image: '/images/case-retail.jpg',
  },
];

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clients"
        title="Trusted by ambitious teams across North America"
        subtitle="From Fortune 500 enterprises to fast-growing startups — we partner with leaders who expect more from their technology team."
        crumbs={[{ label: 'Clients' }]}
      />

      {/* Logo wall */}
      <section className="border-y border-ink-100 bg-white">
        <div className="container-x py-8">
          <MarqueeLogos />
        </div>
      </section>

      <StatsBlock />

      {/* Featured logos grid */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal><span className="eyebrow">Selected partners</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="h2 mt-5 text-balance">
                A small sample of the teams we <span className="gradient-text">partner with</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {CLIENT_LOGOS.map((name, i) => (
              <Reveal key={name} delay={(i % 5) * 0.05}>
                <div className="group flex h-24 items-center justify-center rounded-2xl border border-ink-200 bg-white px-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-brand-glow">
                  <span className="font-display text-lg font-bold tracking-tight text-ink-700 transition-colors group-hover:text-brand-600">
                    {name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal><span className="eyebrow">Case studies</span></Reveal>
              <Reveal delay={0.1}>
                <h2 className="h2 mt-5 text-balance">
                  Outcomes that <span className="gradient-text">moved the needle</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-ink-200/70 bg-white transition-all hover:-translate-y-2 hover:border-brand-200 hover:shadow-brand-glow-lg">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300 backdrop-blur">
                      {c.sector}
                    </span>
                    <h3 className="absolute inset-x-5 bottom-5 font-display text-2xl font-semibold leading-tight text-white">
                      {c.title}
                    </h3>
                  </div>
                  <div className="p-8 md:p-10">
                    <ul className="grid gap-3 sm:grid-cols-3">
                      {c.impact.map((imp) => (
                        <li key={imp} className="rounded-2xl border border-ink-100 bg-brand-50/40 px-4 py-3 text-center text-sm font-semibold text-ink-900">
                          {imp}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-ink-100 pt-6">
                      <div className="flex flex-wrap gap-2">
                        {c.tags.map((t) => (
                          <span key={t} className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-700">
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link href="/contact" className="btn-ghost">
                        Talk to this team
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
