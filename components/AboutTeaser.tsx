'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Senior W2 consultants, not just resumes',
  'Onshore, nearshore and offshore models',
  'Pods that ship in weeks, not quarters',
  '12+ years partnering with Fortune 500 to startups',
];

export default function AboutTeaser() {
  return (
    <section className="section">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-brand-gradient opacity-15 blur-3xl" />
          <div className="relative grid grid-cols-5 gap-4">
            <div className="col-span-3 overflow-hidden rounded-[2rem] border border-ink-200">
              <Image
                src="/images/about-office.jpg"
                alt="Modern collaborative workspace"
                width={800}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-ink-200">
                <Image
                  src="/images/about-team.jpg"
                  alt="TEKinspire team in a planning session"
                  width={500}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                />
              </div>
              <div className="flex-1 rounded-[2rem] bg-brand-gradient p-6 text-white shadow-brand-glow">
                <div className="font-display text-4xl font-bold leading-none">12+</div>
                <div className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-white/85">
                  Years inspiring outcomes
                </div>
                <div className="mt-4 h-1 w-12 rounded-full bg-white/40" />
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            About TEKinspire
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="h2 mt-5 text-balance"
          >
            A different kind of <span className="gradient-text">technology partner</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-ink-700"
          >
            From our headquarters in Edison, NJ we partner with enterprises, mid-market leaders and ambitious startups
            to deliver outcomes that move the business forward — combining senior consulting talent, a deep bench of
            engineers and a proven delivery model.
          </motion.p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-4 text-sm font-medium text-ink-800"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                {h}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8"
          >
            <Link href="/about" className="btn-primary">
              More about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
