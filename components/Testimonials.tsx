'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import Reveal from './Reveal';

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">What clients say</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h2 mt-5 text-balance">
              Outcomes our partners <span className="gradient-text">talk about</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-white p-8 transition-all hover:-translate-y-2 hover:border-brand-200 hover:shadow-brand-glow"
            >
              <Quote className="h-9 w-9 text-brand-400" />
              <blockquote className="mt-5 text-base leading-relaxed text-ink-800">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-ink-100 pt-5">
                <div className="font-semibold text-ink-900">{t.name}</div>
                <div className="text-sm text-ink-500">{t.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
