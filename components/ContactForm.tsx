'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const inputCls =
  'w-full rounded-2xl border border-ink-200 bg-white px-5 py-3.5 text-sm text-ink-900 placeholder:text-ink-400 transition-all focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 900);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            Full name
          </label>
          <input className={inputCls} placeholder="Alex Patel" required />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            Work email
          </label>
          <input type="email" className={inputCls} placeholder="alex@company.com" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            Company
          </label>
          <input className={inputCls} placeholder="Acme, Inc." />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            I&apos;m interested in
          </label>
          <select className={inputCls} defaultValue="">
            <option value="" disabled>Select a topic</option>
            <option>IT Staffing & Augmentation</option>
            <option>Software Development</option>
            <option>Cloud Services</option>
            <option>AI / ML & Data</option>
            <option>Cybersecurity</option>
            <option>Managed IT Services</option>
            <option>Careers / Submit Resume</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
          How can we help?
        </label>
        <textarea
          rows={5}
          className={`${inputCls} resize-none`}
          placeholder="Share a few lines about your project, role or goal…"
          required
        />
      </div>

      <AnimatePresence mode="wait">
        {status !== 'sent' ? (
          <motion.button
            key="submit"
            type="submit"
            disabled={status === 'sending'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="btn-primary w-full justify-center !py-4 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
            <Send className="h-4 w-4" />
          </motion.button>
        ) : (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800"
          >
            <CheckCircle2 className="h-5 w-5" />
            Thanks — we&apos;ve received your note and will reply within one business day.
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs text-ink-500">
        By submitting this form you agree to our privacy policy. We respect your inbox.
      </p>
    </form>
  );
}
