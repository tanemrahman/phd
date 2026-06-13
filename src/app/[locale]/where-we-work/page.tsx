import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {MapPin} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/home/CTABanner';
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

const REGIONS = [
  'Dhaka',
  'Chattogram',
  'Sylhet',
  'Khulna',
  'Rajshahi',
  'Barishal',
  'Rangpur',
  'Cox’s Bazar',
];

function Content() {
  const t = useTranslations('where');

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} image={IMG.childrenCommunity} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-phd-muted">{t('body')}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {REGIONS.map((r) => (
            <div
              key={r}
              className="flex items-center gap-2 rounded-xl border border-phd-gray bg-phd-light px-4 py-4 text-sm font-semibold text-phd-dark"
            >
              <MapPin size={17} className="text-phd-accent" />
              {r}
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
