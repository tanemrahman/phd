'use client';

import {useEffect, useRef, useState} from 'react';
import {useTranslations} from 'next-intl';

const STATS = [
  {key: 'years', value: 30, suffix: '+'},
  {key: 'programs', value: 200, suffix: '+'},
  {key: 'districts', value: 40, suffix: '+'},
  {key: 'partners', value: 50, suffix: '+'},
] as const;

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let start = 0;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return n;
}

export default function Stats() {
  const t = useTranslations('stats');
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      {threshold: 0.4}
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative z-20 -mt-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl bg-phd-gray shadow-2xl ring-1 ring-phd-gray lg:grid-cols-4"
      >
        {STATS.map((s) => (
          <Stat key={s.key} value={s.value} suffix={s.suffix} label={t(s.key)} run={run} />
        ))}
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  run,
}: {
  value: number;
  suffix: string;
  label: string;
  run: boolean;
}) {
  const n = useCountUp(value, run);
  return (
    <div className="bg-white p-7 text-center transition-colors hover:bg-phd-light sm:p-8">
      <div className="bg-gradient-to-br from-phd-primary to-phd-accent bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
        {n}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold text-phd-muted">{label}</div>
    </div>
  );
}
