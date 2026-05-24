'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    src: '/images/hero-team.jpg',
    caption: 'Senior pods that ship outcomes',
    tag: 'Engineering',
  },
  {
    src: '/images/hero-2.jpg',
    caption: 'AI that powers the business',
    tag: 'AI / ML',
  },
  {
    src: '/images/hero-3.jpg',
    caption: 'Cloud, secure and at scale',
    tag: 'Cloud',
  },
];

const DURATION_MS = 5000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % SLIDES.length);
    }, DURATION_MS);
    return () => clearInterval(t);
  }, [paused]);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  };

  const slide = SLIDES[index];

  return (
    <div
      className="relative mx-auto w-full max-w-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -inset-6 rounded-[3rem] bg-brand-gradient opacity-25 blur-3xl" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-ink-200 bg-white shadow-brand-glow">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={slide.src}
            custom={direction}
            initial={{ opacity: 0, scale: 1.08, x: direction * 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -direction * 40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.caption}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />

            <div className="absolute inset-x-5 top-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300 backdrop-blur">
                {slide.tag}
              </span>
            </div>

            <div className="absolute inset-x-5 bottom-24 text-white">
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/70">In focus</div>
              <div className="mt-1 font-display text-2xl font-bold leading-tight">{slide.caption}</div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom stats card (always visible, doesn't change with slide) */}
        <div className="absolute inset-x-5 bottom-5 z-10 rounded-2xl border border-white/15 bg-white/95 p-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500">Live engagements</div>
              <div className="font-display text-2xl font-bold text-ink-900">24 squads</div>
            </div>
            <div className="rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-white shadow-brand-glow">
              +12% MoM
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur transition-all hover:bg-white hover:text-ink-900"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur transition-all hover:bg-white hover:text-ink-900"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute left-1/2 top-5 z-10 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-8 bg-white' : 'w-3 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
        className="absolute -left-5 top-8 flex items-center gap-2 rounded-2xl border border-ink-200 bg-white px-4 py-3 shadow-soft"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-white text-sm font-bold">★</span>
        <div className="leading-tight">
          <div className="text-[10px] uppercase tracking-[0.18em] text-ink-500">Rating</div>
          <div className="text-sm font-semibold text-ink-900">4.9 / 5</div>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
        className="absolute -right-5 top-1/3 flex items-center gap-2 rounded-2xl border border-ink-200 bg-white px-4 py-3 shadow-soft"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink-900 text-brand-400 text-sm font-bold">⚡</span>
        <div className="leading-tight">
          <div className="text-[10px] uppercase tracking-[0.18em] text-ink-500">Time-to-hire</div>
          <div className="text-sm font-semibold text-ink-900">7 days</div>
        </div>
      </motion.div>
    </div>
  );
}
