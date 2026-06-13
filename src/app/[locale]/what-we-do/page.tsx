import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ArrowRight} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/home/CTABanner';
import {PROGRAMS} from '@/lib/programs';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'programs'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function WhatWeDoPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations('programs');

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} image={IMG.healthWorker} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-5 px-4 sm:px-6 lg:px-8">
          {PROGRAMS.map(({key, slug, Icon}, i) => (
            <Link
              id={key}
              key={key}
              href={`/what-we-do/${slug}`}
              className="group flex flex-col gap-5 rounded-2xl border border-phd-gray bg-white p-7 transition-all hover:-translate-y-1 hover:border-phd-accent hover:shadow-lg sm:flex-row sm:items-start"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-phd-primary text-white transition-colors group-hover:bg-phd-accent">
                <Icon size={30} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-phd-accent">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h2 className="mt-1 text-2xl font-bold text-phd-dark">{t(`${key}.title`)}</h2>
                <p className="mt-2 leading-relaxed text-phd-muted">{t(`${key}.desc`)}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-phd-accent">
                  {t('exploreAll')}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
