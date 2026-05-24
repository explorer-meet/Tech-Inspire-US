'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MouseIcon,
  PlayCircle,
  Cpu,
  Cloud,
  ShieldCheck,
} from 'lucide-react';

type Slide = {
  image: string;
  tag: string;
  highlight: string; // gradient word for the headline
  title: string; // full headline
  subtitle: string;
  Icon: typeof Cpu;
  accent: string; // small accent text
};

const SLIDES: Slide[] = [
  {
    image: '/images/hero-team.jpg',
    tag: 'Engineering Excellence',
    highlight: 'Business Growth',
    title: 'Your Technology Partner for',
    subtitle:
      'Senior engineering pods that ship outcomes — not slides. From discovery through DevOps, one accountable team.',
    Icon: Cpu,
    accent: 'Software · Mobile · DevOps',
  },
  {
    image: '/images/hero-2.jpg',
    tag: 'AI / ML & Data',
    highlight: 'Intelligent Systems',
    title: 'Productionised',
    subtitle:
      'Generative AI, predictive models and analytics that move revenue — built on a rigorous MLOps foundation.',
    Icon: Sparkles,
    accent: 'GenAI · MLOps · Analytics',
  },
  {
    image: '/images/hero-3.jpg',
    tag: 'Cloud & Cybersecurity',
    highlight: 'Cloud at Scale',
    title: 'Secure, Resilient',
    subtitle:
      'AWS, Azure and GCP modernization with zero-trust architecture, SOC operations and 24/7 managed cloud.',
    Icon: Cloud,
    accent: 'AWS · Azure · GCP',
  },
];

const DURATION_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-advance + progress bar
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const tick = 50;
    const total = DURATION_MS;
    let elapsed = 0;
    const progressTimer = setInterval(() => {
      elapsed += tick;
      setProgress(Math.min(elapsed / total, 1));
    }, tick);
    const slideTimer = setTimeout(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % SLIDES.length);
    }, DURATION_MS);
    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [index, paused]);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  };
  const jump = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  const slide = SLIDES[index];
  const SlideIcon = slide.Icon;

  return (
    <section
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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

      {/* Side counter (vertical) */}
      <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 select-none flex-col items-center gap-3 lg:flex">
        <span className="font-display text-xs font-semibold tracking-[0.22em] text-white/70">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="h-24 w-px bg-white/20" />
        <span className="font-display text-xs font-semibold tracking-[0.22em] text-white/40">
          {String(SLIDES.length).padStart(2, '0')}
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div className="container-x relative z-10 flex h-full flex-col justify-center pt-28">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
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
                <h1 className="font-display mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl xl:text-[88px]">
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

                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
                  {slide.subtitle}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-300/90">
                  <span className="h-px w-8 bg-brand-400" />
                  {slide.accent}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTAs (don't reanimate per slide) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link href="/contact" className="btn-primary !py-4">
                Talk to Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white hover:text-ink-900"
              >
                <PlayCircle className="h-4 w-4" />
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Floating glass info card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-brand-glow-lg">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-brand-glow">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                    Trusted by
                  </div>
                  <div className="font-display text-lg font-bold leading-tight">
                    Fortune 500 to Startups
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { v: '150+', l: 'Clients' },
                  { v: '300+', l: 'Projects' },
                  { v: '80+', l: 'Experts' },
                  { v: '12+', l: 'Years' },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="font-display text-2xl font-bold">{s.v}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-white/70">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-400/20 text-emerald-300">
                  ●
                </span>
                Onsite · Remote · Hybrid teams available
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slide controls + progress (bottom of hero) */}
        <div className="mt-auto pb-10">
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
            <div className="flex items-center gap-3">
              <button
                aria-label="Previous slide"
                onClick={() => go(-1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition-all hover:bg-white hover:text-ink-900"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next slide"
                onClick={() => go(1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition-all hover:bg-white hover:text-ink-900"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="ml-3 hidden items-center gap-2 md:flex">
                {SLIDES.map((s, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => jump(i)}
                    className="group flex items-center gap-2"
                  >
                    <span
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === index ? 'w-8 bg-brand-400' : 'w-2.5 bg-white/30 group-hover:bg-white/60'
                      }`}
                    />
                    <span
                      className={`text-xs font-medium transition-colors duration-300 ${
                        i === index ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                      }`}
                    >
                      {s.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scroll hint */}
            <a
              href="#after-hero"
              className="group hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/60 transition-colors hover:text-white md:flex"
            >
              <span className="relative inline-flex h-9 w-5 items-start justify-center rounded-full border border-white/30">
                <motion.span
                  animate={{ y: [2, 14, 2] }}
                  transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
                  className="mt-1 h-1.5 w-1 rounded-full bg-white"
                />
              </span>
              Scroll to explore
            </a>
          </div>

          {/* Linear progress for current slide */}
          <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              key={index}
              className="h-full rounded-full bg-brand-gradient"
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ ease: 'linear', duration: 0.05 }}
            />
          </div>
        </div>
      </div>

      {/* Anchor target for the scroll hint */}
      <div id="after-hero" className="absolute bottom-0" />
    </section>
  );
}
