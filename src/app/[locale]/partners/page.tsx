import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ArrowRight} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import {partnerGroups} from '@/lib/content';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'partnersPage'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function PartnersPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations('partnersPage');
  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image={IMG.giving} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-phd-muted">{t('lead')}</p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
          {partnerGroups.map((g) => (
            <Reveal key={g.group}>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-phd-primary">{g.group}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {g.names.map((name) => (
                    <div
                      key={name}
                      className="flex items-center justify-center rounded-xl border border-phd-gray bg-white px-4 py-6 text-center text-sm font-semibold text-phd-dark shadow-sm transition-all hover:-translate-y-1 hover:border-phd-accent hover:shadow-md"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-phd-light py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t('ctaTitle')} subtitle={t('ctaBody')} />
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-phd-gold px-8 py-3.5 text-sm font-bold text-phd-dark shadow-lg transition-transform hover:scale-[1.04]"
            >
              {t('ctaTitle')}
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
