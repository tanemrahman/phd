import {useTranslations} from 'next-intl';
import {Search, Users, Rocket, TrendingUp, type LucideIcon} from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';

const STEPS: {n: string; key: string; Icon: LucideIcon}[] = [
  {n: '01', key: 's1', Icon: Search},
  {n: '02', key: 's2', Icon: Users},
  {n: '03', key: 's3', Icon: Rocket},
  {n: '04', key: 's4', Icon: TrendingUp},
];

export default function Approach() {
  const t = useTranslations('approach');

  return (
    <section className="relative overflow-hidden bg-phd-navy py-20 text-white sm:py-24">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '26px 26px',
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} light />
        </Reveal>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-white/25 to-transparent lg:block"
            aria-hidden
          />
          {STEPS.map((s, i) => (
            <Reveal as="div" key={s.key} delay={i * 120} className="relative text-center">
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
                <span className="absolute inset-0 rounded-2xl bg-white/5 ring-1 ring-white/15" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-phd-accent to-phd-primary-light text-white shadow-lg">
                  <s.Icon size={26} />
                </span>
                <span className="absolute -right-1 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-phd-gold text-xs font-extrabold text-phd-dark shadow">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{t(`${s.key}Title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{t(`${s.key}Desc`)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
