import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Target, Eye, ShieldCheck} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/home/CTABanner';
import FocusAreas from '@/components/home/FocusAreas';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'about'});
  return {title: t('title'), description: t('lead')};
}

export default async function AboutPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations('about');

  const cards = [
    {Icon: Target, title: t('missionTitle'), body: t('mission')},
    {Icon: Eye, title: t('visionTitle'), body: t('vision')},
    {Icon: ShieldCheck, title: t('valuesTitle'), body: t('values')},
  ];

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} image={IMG.heartHands} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xl font-medium leading-relaxed text-phd-dark">{t('lead')}</p>
          <p className="mt-5 leading-relaxed text-phd-muted">{t('body')}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {cards.map(({Icon, title, body}) => (
            <div key={title} className="rounded-2xl border border-phd-gray bg-phd-light p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phd-accent/15 text-phd-accent">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-phd-dark">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-phd-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <FocusAreas />
      <CTABanner />
    </>
  );
}
