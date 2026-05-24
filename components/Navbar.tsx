'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SITE } from '@/lib/data';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // The Home page has a dark full-bleed hero; other pages have a light PageHeader.
  // Only treat the navbar as "over dark" on the Home route when not yet scrolled.
  const overDark = !scrolled && pathname === '/';

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-soft'
          : overDark
            ? 'bg-gradient-to-b from-ink-950/40 via-ink-950/15 to-transparent backdrop-blur-sm'
            : 'bg-transparent'
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center"
          aria-label="TEKinspire home"
        >
          <span
            className={clsx(
              'inline-flex items-center rounded-2xl px-2 py-1 transition-all duration-300',
              overDark ? 'bg-white/95 shadow-soft' : ''
            )}
          >
            <Image
              src="/logo.png"
              alt="TEKinspire — Inspired by Technology"
              width={520}
              height={160}
              className="h-10 w-auto transition-transform duration-500 group-hover:scale-[1.03] md:h-11"
              priority
            />
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active
                    ? overDark
                      ? 'text-brand-300'
                      : 'text-brand-600'
                    : overDark
                      ? 'text-white/85 hover:text-white'
                      : 'text-ink-700 hover:text-brand-600'
                )}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className={clsx(
                      'absolute inset-0 -z-10 rounded-full',
                      overDark ? 'bg-white/15 backdrop-blur' : 'bg-brand-50'
                    )}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phones[0]}`}
            className={clsx(
              'flex items-center gap-2 text-sm font-medium transition-colors',
              overDark
                ? 'text-white/85 hover:text-white'
                : 'text-ink-700 hover:text-brand-600'
            )}
          >
            <Phone className="h-4 w-4" />
            {SITE.phones[0]}
          </a>
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 text-xs">
            Talk to Us
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={clsx(
            'lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors',
            overDark
              ? 'border-white/25 bg-white/10 text-white backdrop-blur'
              : 'border-ink-200 bg-white text-ink-900'
          )}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-ink-100 bg-white/95 backdrop-blur-xl"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={clsx(
                      'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                      active
                        ? 'bg-brand-50 text-brand-600'
                        : 'text-ink-700 hover:bg-ink-50'
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <a
                href={`tel:${SITE.phones[0]}`}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-ink-700 hover:bg-ink-50"
              >
                <Phone className="h-4 w-4" />
                {SITE.phones[0]}
              </a>
              <Link
                href="/contact"
                className="btn-primary mt-3 w-full justify-center"
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
