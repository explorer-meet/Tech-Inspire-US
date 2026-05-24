'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/data';

type Props = {
  limit?: number;
  showCta?: boolean;
};

export default function ServicesGrid({ limit, showCta }: Props) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            id={s.slug}
          >
            <Link
              href={`/services#${s.slug}`}
              className="group relative block h-full overflow-hidden rounded-3xl border border-ink-200/70 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:shadow-brand-glow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {s.image && (
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-brand-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="absolute inset-x-5 bottom-5 font-display text-xl font-semibold leading-tight text-white">
                  {s.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-ink-700">{s.short}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
      {showCta && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-ink-950 p-8 text-white"
        >
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-500/40 blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-xl font-semibold">Need something custom?</h3>
            <p className="mt-3 text-sm text-ink-200/80">
              Tell us about your goals and we&apos;ll assemble the right team — usually within a week.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
