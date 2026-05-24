'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/data';
import Reveal from './Reveal';

export default function ProcessSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 to-white" />
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">Our approach</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h2 mt-5 text-balance">
              A proven path from <span className="gradient-text">idea to outcome</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-ink-700">
              Four crisp phases keep delivery transparent, predictable and tied to business impact.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-white p-8 transition-all hover:-translate-y-2 hover:border-brand-200 hover:shadow-brand-glow"
            >
              <div className="font-display text-6xl font-bold text-brand-100 transition-colors group-hover:text-brand-200">
                {p.step}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{p.desc}</p>
              <div className="mt-6 h-1 w-12 rounded-full bg-brand-gradient transition-all duration-500 group-hover:w-24" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
