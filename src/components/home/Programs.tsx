import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ArrowRight} from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import {PROGRAMS} from '@/lib/programs';

export default function Programs() {
  const t = useTranslations('programs');
  const tc = useTranslations('common');

  return (
    <section className="relative bg-phd-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({key, Icon}, i) => (
            <Reveal key={key} as="div" delay={(i % 3) * 90}>
              <Link
                href={`/what-we-do#${key}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-phd-gray bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-phd-accent hover:shadow-xl"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-phd-primary to-phd-accent transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-phd-primary/10 to-phd-accent/10 text-phd-primary transition-all duration-300 group-hover:from-phd-primary group-hover:to-phd-accent group-hover:text-white">
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-phd-dark">{t(`${key}.title`)}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-phd-muted">
                  {t(`${key}.desc`)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-phd-accent">
                  {tc('learnMore')}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
