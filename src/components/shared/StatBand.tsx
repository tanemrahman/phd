'use client';

import {useEffect, useRef, useState} from 'react';

export type StatItem = {value: number; suffix?: string; label: string};

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let start = 0;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return n;
}

export default function StatBand({items, dark}: {items: StatItem[]; dark?: boolean}) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setRun(true), obs.disconnect()),
      {threshold: 0.4}
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 gap-px overflow-hidden rounded-3xl ${
        dark ? 'bg-white/10 ring-1 ring-white/15' : 'bg-phd-gray ring-1 ring-phd-gray'
      } sm:grid-cols-3`}
    >
      {items.map((s) => (
        <Cell key={s.label} item={s} run={run} dark={dark} />
      ))}
    </div>
  );
}

function Cell({item, run, dark}: {item: StatItem; run: boolean; dark?: boolean}) {
  const n = useCountUp(item.value, run);
  return (
    <div className={`p-7 text-center sm:p-8 ${dark ? 'bg-phd-navy' : 'bg-white'}`}>
      <div
        className={`text-4xl font-extrabold sm:text-5xl ${
          dark
            ? 'text-phd-gold'
            : 'bg-gradient-to-br from-phd-primary to-phd-accent bg-clip-text text-transparent'
        }`}
      >
        {n}
        {item.suffix}
      </div>
      <div className={`mt-2 text-sm font-semibold ${dark ? 'text-white/80' : 'text-phd-muted'}`}>
        {item.label}
      </div>
    </div>
  );
}
