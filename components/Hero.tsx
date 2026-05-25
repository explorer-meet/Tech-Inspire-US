'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Cpu,
  Cloud,
} from 'lucide-react';

type Slide = {
  image: string;
  imagePosition?: string;
  tag: string;
  highlight: string; // gradient word for the headline
  title: string; // full headline
  subtitle: string;
  Icon: typeof Cpu;
  accent?: string; // small accent text
};

const SLIDES: Slide[] = [
  {
    image: '/images/service-strategy.jpg',
    imagePosition: 'center',
    tag: 'Quality Service',
    highlight: 'Service',
    title: 'Quality',
    subtitle:
      'We firmly believe that what we do reflects our name - both organisationally and also individually for the consultants working on an assignment. We therefore make it a point never to compromise on our rigorous quality standards as we consider our reputation to be sacrosanct.',
    Icon: Cpu,
  },
  {
    image: '/images/service-software.jpg',
    imagePosition: 'center',
    tag: 'Right Solutions',
    highlight: 'Solutions',
    title: 'Right',
    subtitle:
      'For over 40 years, we\'ve been enthusiastic about accomplishing better outcomes for our customers, comes about that go past budgetary and are extraordinarily customized.',
    Icon: Sparkles,
  },
  {
    image: '/images/about-team.jpg',
    imagePosition: 'center',
    tag: 'Clients First',
    highlight: 'Working Process',
    title: 'Clients First',
    subtitle:
      'We love nothing more than working with clients on their projects. We care about our clients and go the extra mile or two to ensure utmost customer satisfaction',
    Icon: Cloud,
  },
];

const DURATION_MS = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-advance slides from left to right with fixed delay.
  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, DURATION_MS);
    return () => {
      clearTimeout(slideTimer);
    };
  }, [index]);

  const slide = SLIDES[index];
  const SlideIcon = slide.Icon;

  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden text-white">
      {/* Full-bleed image carousel with Ken Burns */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0, scale: 1.12 }}
          transition={{
            opacity: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: DURATION_MS / 1000, ease: 'linear' },
          }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            style={{ objectPosition: slide.imagePosition ?? 'center' }}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark + brand color overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/70 to-ink-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-dots opacity-25" />

      {/* Floating brand blobs */}
      <div className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl animate-blob" />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-brand-700/20 blur-3xl animate-blob"
        style={{ animationDelay: '4s' }}
      />

      {/* MAIN CONTENT */}
      <div className="container-x relative z-10 flex h-full flex-col justify-end pb-16 pt-28 md:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.tag}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Eyebrow */}
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-300 backdrop-blur">
                  <SlideIcon className="h-3.5 w-3.5" />
                  {slide.tag}
                </span>

                {/* Headline */}
                <h1 className="font-display mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl xl:text-6xl">
                  {slide.title}{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
                      {slide.highlight}
                    </span>
                    <svg
                      viewBox="0 0 380 14"
                      className="absolute -bottom-3 left-0 w-full"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        key={slide.highlight}
                        d="M2 11 Q90 2 190 7 T378 5"
                        stroke="url(#hg)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <defs>
                        <linearGradient id="hg" x1="0" x2="1">
                          <stop offset="0%" stopColor="#fdba74" />
                          <stop offset="100%" stopColor="#f97316" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
                  {slide.subtitle}
                </p>

                {slide.accent && (
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-300/90">
                    <span className="h-px w-8 bg-brand-400" />
                    {slide.accent}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
