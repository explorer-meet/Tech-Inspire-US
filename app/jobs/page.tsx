import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import { JOBS } from '@/lib/data';
import { MapPin, Briefcase, Clock, ArrowUpRight, GraduationCap, HeartHandshake, Globe2, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'Careers — TEKinspire' };

const benefits = [
  { icon: GraduationCap, title: 'Continuous learning', desc: 'Certifications, conferences and mentor pods funded by the company.' },
  { icon: HeartHandshake, title: 'Health & wellness', desc: 'Top-tier medical, dental, vision and family-first policies.' },
  { icon: Globe2, title: 'Remote-friendly', desc: 'Onsite, hybrid or remote across the US — your team, your way.' },
  { icon: Rocket, title: 'Real growth paths', desc: 'Clear ladders for ICs, leads and consulting partners.' },
];

export default function JobsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build your career with people who care"
        subtitle="Join a team that ships meaningful work for ambitious clients — with the support, learning and flexibility you deserve."
        crumbs={[{ label: 'Jobs' }]}
      />

      {/* Culture banner */}
      <section className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/jobs-culture.jpg"
              alt="TEKinspire team culture"
              width={1600}
              height={700}
              className="h-[300px] w-full object-cover md:h-[440px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/40 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex items-center p-8 md:p-14">
              <div className="max-w-lg text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300 backdrop-blur">
                  Life at TEKinspire
                </span>
                <h3 className="font-display mt-5 text-3xl font-bold leading-tight md:text-4xl">
                  Senior talent. Real ownership. <span className="text-brand-400">A team that has your back.</span>
                </h3>
                <p className="mt-4 text-ink-200/85">
                  We hire experienced engineers and consultants and trust them to do their best work — backed by
                  great clients, great peers and great support.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 0.08}>
                  <div className="group h-full rounded-3xl border border-ink-200/70 bg-white p-7 transition-all hover:-translate-y-2 hover:border-brand-200 hover:shadow-brand-glow">
                    <div className="card-icon">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink-900">{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700">{b.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal><span className="eyebrow">Open roles</span></Reveal>
              <Reveal delay={0.1}>
                <h2 className="h2 mt-5 text-balance">
                  We&apos;re hiring across <span className="gradient-text">every practice</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <a
                href={`mailto:careers@tekinspireus.com`}
                className="btn-ghost"
              >
                Send your resume → careers@tekinspireus.com
              </a>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5">
            {JOBS.map((j, i) => (
              <Reveal key={j.id} delay={(i % 3) * 0.05}>
                <article className="group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-brand-glow md:p-8">
                  <div className="grid gap-6 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-7">
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-brand-700">
                          {j.type}
                        </span>
                        <span className="text-ink-500">Posted {j.posted}</span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-ink-900 transition-colors group-hover:text-brand-700">
                        {j.title}
                      </h3>
                      <p className="mt-3 text-sm text-ink-700">{j.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {j.tags.map((t) => (
                          <span key={t} className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-700 transition-colors group-hover:border-brand-200 group-hover:text-brand-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-3 space-y-3 text-sm text-ink-700">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-brand-500" />
                        {j.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-brand-500" />
                        {j.experience}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-brand-500" />
                        {j.posted}
                      </div>
                    </div>

                    <div className="md:col-span-2 md:text-right">
                      <Link
                        href={`/contact?role=${encodeURIComponent(j.title)}`}
                        className="btn-primary !py-3 !px-5"
                      >
                        Apply
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 rounded-3xl border border-dashed border-brand-300 bg-white p-8 text-center md:p-12">
              <h3 className="h3 text-ink-900">Don&apos;t see your perfect role?</h3>
              <p className="mx-auto mt-4 max-w-xl text-ink-700">
                We&apos;re always meeting strong engineers, consultants and product talent. Send us your resume and we&apos;ll be in touch when a fit opens up.
              </p>
              <Link href="/contact" className="btn-primary mt-7">
                Submit your resume
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
