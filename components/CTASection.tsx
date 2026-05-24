import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import Reveal from './Reveal';
import { SITE } from '@/lib/data';

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-950 px-8 py-16 md:px-16 md:py-20">
            <Image
              src="/images/cta-bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-25 mix-blend-luminosity"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ink-950/85 via-ink-950/70 to-ink-950/85" />
            <div className="absolute inset-0 bg-radial-fade opacity-80" />
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl animate-blob" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-700/25 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
            <div className="absolute inset-0 bg-dots opacity-20" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="eyebrow !border-white/20 !bg-white/10 !text-brand-300">
                  Ready when you are
                </span>
                <h2 className="h2 mt-5 text-white text-balance">
                  Let&apos;s turn your roadmap into <span className="gradient-text">shipped outcomes</span>.
                </h2>
                <p className="mt-5 max-w-xl text-ink-200/85">
                  Whether you need a senior engineer next week or a full transformation program, our team is ready to move fast.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Start a project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href={`tel:${SITE.phones[0]}`} className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white hover:text-ink-900">
                    <Phone className="h-4 w-4" />
                    {SITE.phones[0]}
                  </a>
                </div>
                <a href={`mailto:${SITE.email}`} className="text-sm text-ink-200/80 hover:text-brand-300">
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
