import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {MapPin} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/home/CTABanner';
import SectionHeading from '@/components/shared/SectionHeading';
import StatBand from '@/components/shared/StatBand';
import Reveal from '@/components/shared/Reveal';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'where'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function WhereWeWorkPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

const DIVISIONS = [
  'dhaka',
  'chattogram',
  'khulna',
  'rajshahi',
  'sylhet',
  'barishal',
  'rangpur',
  'mymensingh',
];

function Content() {
  const t = useTranslations('where');

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image={IMG.childrenCommunity} />

      {/* intro */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-phd-muted">{t('body')}</p>
        </div>

        {/* national reach infographic */}
        <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8">
          <StatBand
            items={[
              {value: 8, label: t('statDivisions')},
              {value: 64, label: t('statDistricts')},
              {value: 30, suffix: '+', label: t('statYears')},
            ]}
          />
        </div>
      </section>

      {/* divisions grid */}
      <section className="bg-phd-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t('reachTitle')} subtitle={t('reachSubtitle')} />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            {DIVISIONS.map((d, i) => (
              <Reveal as="div" key={d} delay={(i % 4) * 80}>
                <div className="group flex flex-col items-center gap-2 rounded-2xl border border-phd-gray bg-white px-4 py-6 text-center transition-all hover:-translate-y-1 hover:border-phd-accent hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-phd-primary/10 text-phd-primary transition-colors group-hover:bg-phd-primary group-hover:text-white">
                    <MapPin size={22} />
                  </span>
                  <span className="text-sm font-bold text-phd-dark">{t(`div.${d}`)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
