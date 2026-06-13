import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/home/CTABanner';
import {PROGRAMS} from '@/lib/programs';
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
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-5 px-4 sm:px-6 lg:px-8">
          {PROGRAMS.map(({key, Icon}, i) => (
            <div
              id={key}
              key={key}
              className="flex flex-col gap-5 rounded-2xl border border-phd-gray bg-white p-7 sm:flex-row sm:items-start"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-phd-primary text-white">
                <Icon size={30} />
              </div>
              <div>
                <div className="text-sm font-semibold text-phd-accent">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h2 className="mt-1 text-2xl font-bold text-phd-dark">{t(`${key}.title`)}</h2>
                <p className="mt-2 leading-relaxed text-phd-muted">{t(`${key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
