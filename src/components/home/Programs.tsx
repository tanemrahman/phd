import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ArrowRight} from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import {PROGRAMS} from '@/lib/programs';

export default function Programs() {
  const t = useTranslations('programs');
  const tc = useTranslations('common');

  return (
    <section className="bg-phd-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({key, Icon}) => (
            <Link
              key={key}
              href="/what-we-do"
              className="group rounded-2xl border border-phd-gray bg-white p-7 transition-all hover:-translate-y-1 hover:border-phd-accent hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-phd-primary/10 text-phd-primary transition-colors group-hover:bg-phd-primary group-hover:text-white">
                <Icon size={26} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-phd-dark">{t(`${key}.title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-phd-muted">{t(`${key}.desc`)}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-phd-accent">
                {tc('learnMore')}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
