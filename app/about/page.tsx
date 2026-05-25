import PageHeader from '@/components/PageHeader';
import ProcessSection from '@/components/ProcessSection';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { VALUES } from '@/lib/data';
import { Target, Eye, Compass, Heart } from 'lucide-react';
import Image from 'next/image';

const valueIcons = [Heart, Compass, Target, Eye];

export const metadata = { title: 'About Us — TEKinspire' };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About TEKinspire"
        title="Inspired by Technology. Driven by Outcomes."
        subtitle="We are a Tier 1 Technology Staffing, Consulting and Solutions firm. Our mission: customer mission success — delivered by people who care."
        crumbs={[{ label: 'About Us' }]}
      />

      {/* Story */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-brand-gradient opacity-15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-ink-200">
                <Image
                  src="/images/about-team.jpg"
                  alt="TEKinspire team collaborating"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-[1.6s] hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-brand-glow md:block">
                <div className="font-display text-3xl font-bold text-ink-900">12+ Years</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-500">Of inspired delivery</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Our story</span>
            <h2 className="h2 mt-5 text-balance">
              A different kind of <span className="gradient-text">technology partner</span>
            </h2>
            <p className="mt-6 text-ink-700">
              TEKinspire was founded on a simple idea: technology services should be relevant, innovative, timely and affordable —
              and consistently exceed expectations. From our headquarters in Edison, NJ we partner with enterprises, mid-market
              leaders and ambitious startups to deliver outcomes that move the business forward.
            </p>
            <p className="mt-5 text-ink-700">
              We combine senior consulting talent, a deep bench of W2 engineers and a proven delivery model to ship work that
              feels native to your team — at a pace that matches your roadmap.
            </p>
          </Reveal>
        </div>

        <div className="container-x mt-16">
          <Reveal delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { eyebrow: 'Mission', icon: Target, body: 'Customer mission success — relevant, innovative, timely, affordable.' },
                { eyebrow: 'Vision', icon: Eye, body: 'To be the most trusted technology partner for the companies we serve.' },
                { eyebrow: 'Approach', icon: Compass, body: 'Senior talent, transparent delivery, accountable outcomes.' },
                { eyebrow: 'Promise', icon: Heart, body: 'We act as one team with you — no excuses, no surprises.' },
              ].map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={i}
                    className="group relative h-full overflow-hidden rounded-3xl border border-ink-200/70 bg-white p-7 transition-all hover:-translate-y-2 hover:border-brand-200 hover:shadow-brand-glow"
                  >
                    <div className="card-icon">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-xs uppercase tracking-[0.22em] text-ink-500">{b.eyebrow}</div>
                    <p className="mt-2 text-base font-medium text-ink-900">{b.body}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Office banner */}
        <div className="container-x mt-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <Image
                src="/images/about-office.jpg"
                alt="Inside the TEKinspire office"
                width={1600}
                height={700}
                className="h-[300px] w-full object-cover md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/50 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex items-center p-8 md:p-14">
                <div className="max-w-md text-white">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300 backdrop-blur">
                    Our Edison, NJ HQ
                  </span>
                  <h3 className="font-display mt-5 text-3xl font-bold leading-tight md:text-4xl">
                    A workspace built around <span className="text-brand-400">collaboration</span>
                  </h3>
                  <p className="mt-4 text-ink-200/85">
                    Open studios, war-rooms and quiet zones — designed so our pods and your teams ship together,
                    in person or hybrid.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal><span className="eyebrow">Our values</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="h2 mt-5 text-balance">
                The behaviors behind <span className="gradient-text">every engagement</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-ink-200/70 bg-white p-8 transition-all hover:-translate-y-2 hover:border-brand-200 hover:shadow-brand-glow">
                    <div className="card-icon">{Icon ? <Icon className="h-6 w-6" /> : null}</div>
                    <h3 className="font-display text-lg font-semibold text-ink-900">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </>
  );
}
