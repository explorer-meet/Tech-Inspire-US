import { CLIENT_LOGOS } from '@/lib/data';

export default function MarqueeLogos() {
  const row = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <div className="relative overflow-hidden py-10 mask-fade-x">
      <div className="marquee-track">
        {row.map((name, i) => (
          <div
            key={i}
            className="flex h-14 min-w-[180px] items-center justify-center rounded-2xl border border-ink-200 bg-white px-6 font-display text-lg font-bold tracking-tight text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-600"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
