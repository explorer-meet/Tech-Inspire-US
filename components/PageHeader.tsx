'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
};

export default function PageHeader({ eyebrow, title, subtitle, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl animate-blob" />
      <div className="absolute -bottom-24 left-10 -z-10 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
      <div className="absolute inset-0 -z-10 bg-dots opacity-50" />

      <div className="container-x">
        <Reveal>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="h1 mt-5 text-balance">
            {title.split(' ').map((w, i, arr) => (
              <span key={i}>
                {i === arr.length - 1 ? (
                  <span className="gradient-text">{w}</span>
                ) : (
                  <>{w} </>
                )}
              </span>
            ))}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-ink-700 md:text-xl">
              {subtitle}
            </p>
          </Reveal>
        )}
        {crumbs && (
          <Reveal delay={0.3}>
            <nav className="mt-8 flex items-center gap-2 text-sm text-ink-500">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-ink-300" />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-brand-600">{c.label}</Link>
                  ) : (
                    <span className="text-ink-900">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
      </div>
    </section>
  );
}
