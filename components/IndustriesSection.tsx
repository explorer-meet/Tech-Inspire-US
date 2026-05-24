'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Reveal from './Reveal';
import { INDUSTRIES } from '@/lib/data';

const industryImages = [
  '/images/case-healthcare.jpg',
  '/images/case-fintech.jpg',
  '/images/case-insurance.jpg',
  '/images/case-retail.jpg',
  '/images/service-software.jpg',
  '/images/service-strategy.jpg',
];

export default function IndustriesSection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow">Industries</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h2 mt-5 text-balance">
                Built for the <span className="gradient-text">industries you serve</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="text-ink-700">
              We bring vertical depth — combining proven patterns with the regulatory, data and operational
              realities of your sector.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl bg-ink-950 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-brand-glow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={industryImages[i % industryImages.length]}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-60 transition-all duration-[1.2s] group-hover:scale-110 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/20" />
                  <div className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-400 backdrop-blur transition-all duration-500 group-hover:bg-brand-gradient group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-lg font-semibold">{ind.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-200/80">{ind.desc}</p>
                  <div className="mt-5 h-1 w-12 rounded-full bg-brand-gradient transition-all duration-500 group-hover:w-24" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
