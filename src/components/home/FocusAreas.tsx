import {useTranslations} from 'next-intl';
import {HeartPulse, LifeBuoy, Leaf, Scale, GraduationCap, type LucideIcon} from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';

const AREAS: {key: string; Icon: LucideIcon}[] = [
  {key: 'f1', Icon: HeartPulse},
  {key: 'f2', Icon: LifeBuoy},
  {key: 'f3', Icon: Leaf},
  {key: 'f4', Icon: Scale},
  {key: 'f5', Icon: GraduationCap},
];

export default function FocusAreas() {
  const t = useTranslations('approach');

  return (
    <section className="bg-phd-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={t('focusTitle')} subtitle={t('focusSubtitle')} />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {AREAS.map((a, i) => (
            <Reveal as="div" key={a.key} delay={i * 90} className="group text-center">
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-white shadow-md ring-1 ring-phd-gray transition-all duration-300 group-hover:ring-phd-accent" />
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-phd-primary/0 to-phd-accent/0 transition-all duration-300 group-hover:from-phd-primary group-hover:to-phd-accent" />
                <span className="relative text-phd-primary transition-colors duration-300 group-hover:text-white">
                  <a.Icon size={34} strokeWidth={1.7} />
                </span>
              </div>
              <h3 className="mt-4 text-sm font-bold leading-snug text-phd-dark">{t(a.key)}</h3>
              <span
                className="mx-auto mt-2 block h-1 w-8 rounded-full bg-phd-accent/40 transition-all duration-300 group-hover:w-12 group-hover:bg-phd-accent"
                aria-hidden
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
