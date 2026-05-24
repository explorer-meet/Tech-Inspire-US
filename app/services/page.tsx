import PageHeader from '@/components/PageHeader';
import ServicesGrid from '@/components/ServicesGrid';
import IndustriesSection from '@/components/IndustriesSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import { SERVICES } from '@/lib/data';
import { Check } from 'lucide-react';
import Image from 'next/image';

export const metadata = { title: 'Services — TEKinspire' };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="One partner across the entire technology lifecycle"
        subtitle="Strategy, engineering, data, AI, cloud, security, automation and staffing — built into an integrated delivery model."
        crumbs={[{ label: 'Services' }]}
      />

      <section className="section">
        <div className="container-x">
          <ServicesGrid />
        </div>
      </section>

      {/* Service detail rows */}
      <section className="section bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal><span className="eyebrow">In depth</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="h2 mt-5 text-balance">
                What you can <span className="gradient-text">expect from each practice</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 space-y-12">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              const flipped = i % 2 === 1;
              const hasImage = !!s.image;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.05}>
                  <div
                    id={s.slug}
                    className="group grid items-stretch gap-0 overflow-hidden rounded-3xl border border-ink-200/70 bg-white transition-all hover:border-brand-200 hover:shadow-brand-glow md:grid-cols-12"
                  >
                    {hasImage && (
                      <div className={`relative aspect-[4/3] md:aspect-auto md:col-span-5 ${flipped ? 'md:order-2' : ''}`}>
                        <Image
                          src={s.image as string}
                          alt={s.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/60 via-ink-950/10 to-transparent" />
                        <div className="absolute left-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-brand-600 shadow-soft backdrop-blur">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                    )}
                    <div className={`p-8 md:p-12 ${hasImage ? 'md:col-span-7' : 'md:col-span-12'}`}>
                      {!hasImage && (
                        <div className="card-icon">
                          <Icon className="h-7 w-7" />
                        </div>
                      )}
                      <h3 className="h3 text-ink-900">{s.title}</h3>
                      <p className="mt-4 text-ink-700">{s.description}</p>
                      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-brand-50/40 p-4 transition-all hover:border-brand-300 hover:bg-white"
                          >
                            <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
                              <Check className="h-3.5 w-3.5" strokeWidth={3} />
                            </span>
                            <span className="text-sm font-medium text-ink-800">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
