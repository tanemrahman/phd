import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ArrowRight, Target, Eye, ShieldCheck} from 'lucide-react';

export default function AboutPreview() {
  const t = useTranslations('about');
  const tc = useTranslations('common');

  const cards = [
    {Icon: Target, title: t('missionTitle'), body: t('mission')},
    {Icon: Eye, title: t('visionTitle'), body: t('vision')},
    {Icon: ShieldCheck, title: t('valuesTitle'), body: t('values')},
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="mb-2 inline-block h-1 w-12 rounded-full bg-phd-accent" aria-hidden />
          <h2 className="text-3xl font-extrabold tracking-tight text-phd-dark sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-5 text-lg font-medium text-phd-dark">{t('lead')}</p>
          <p className="mt-4 leading-relaxed text-phd-muted">{t('body')}</p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-phd-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-phd-primary-dark"
          >
            {tc('readMore')}
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-1">
          {cards.map(({Icon, title, body}) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-phd-gray bg-phd-light p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-phd-accent/15 text-phd-accent">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-phd-dark">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-phd-muted">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
