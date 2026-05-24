'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { STATS } from '@/lib/data';

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const mv = useMotionValue(0);
  const num = parseFloat(value);
  const suffix = value.replace(/[\d.]/g, '');
  const display = useTransform(mv, (v) => {
    const rounded = Math.round(v);
    return `${rounded}${suffix}`;
  });

  useEffect(() => {
    if (!inView || isNaN(num)) return;
    const controls = animate(mv, num, { duration: 2, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [inView, num, mv]);

  if (isNaN(num)) {
    return <span ref={ref}>{value}</span>;
  }

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function StatsBlock() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-white p-8 transition-all hover:-translate-y-2 hover:border-brand-200 hover:shadow-brand-glow"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-100/50 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
              <div className="relative">
                <div className="font-display text-5xl font-bold tracking-tight text-ink-900">
                  <Counter value={s.value} />
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.18em] text-ink-500">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
