import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { SITE, NAV_LINKS, SERVICES } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-ink-950 text-ink-200">
      <div className="absolute inset-0 bg-radial-fade opacity-60" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-700/20 blur-3xl" />

      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center rounded-2xl bg-white px-5 py-3 shadow-soft transition-transform duration-300 hover:-translate-y-0.5">
              <Image
                src="/logo.png"
                alt="TEKinspire — Inspired by Technology"
                width={520}
                height={160}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-200/80">
              {SITE.description}
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-400" />
                <span className="text-ink-200/85">{SITE.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-400" />
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {SITE.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="text-ink-200/85 hover:text-white">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-400" />
                <a href={`mailto:${SITE.email}`} className="text-ink-200/85 hover:text-white">
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Company
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-200/80 transition-colors hover:text-brand-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Services
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="text-ink-200/80 transition-colors hover:text-brand-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Let&apos;s build something
            </div>
            <p className="mt-5 text-sm text-ink-200/80">
              Have a project, role to hire for, or transformation goal in mind?
            </p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-900 transition-transform duration-300 hover:-translate-y-0.5">
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Linkedin, href: SITE.social.linkedin, label: 'LinkedIn' },
                { Icon: Twitter, href: SITE.social.twitter, label: 'Twitter' },
                { Icon: Facebook, href: SITE.social.facebook, label: 'Facebook' },
                { Icon: Instagram, href: SITE.social.instagram, label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-ink-200 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-ink-200/70 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} TEKinspire. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-400">Privacy</a>
            <a href="#" className="hover:text-brand-400">Terms</a>
            <a href="#" className="hover:text-brand-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
