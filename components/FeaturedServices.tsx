'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';

const FEATURED_SLUGS = [
  'software-development',
  'cloud-services',
  'ai-ml',
  'cybersecurity',
];

export default function FeaturedServices() {
  const featured = SERVICES.filter((s) => FEATURED_SLUGS.includes(s.slug));

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {featured.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/services#${s.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-ink-200/70 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:shadow-brand-glow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.image as string}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-brand-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {s.title}
                  </h3>
                </div>
              </div>
              <div className="p-7">
                <p className="text-sm leading-relaxed text-ink-700">{s.short}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Explore practice
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
