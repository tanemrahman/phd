import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {MapPin, Quote} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/home/CTABanner';
import Reveal from '@/components/shared/Reveal';
import {stories} from '@/lib/content';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'storiesPage'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function StoriesPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

const TONE = ['from-phd-primary to-phd-primary-light', 'from-phd-accent to-phd-accent-dark', 'from-phd-gold to-phd-accent'];

function Content() {
  const t = useTranslations('storiesPage');
  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image={IMG.childrenPeace} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-phd-muted">{t('lead')}</p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
          {stories.map((s, i) => (
            <Reveal as="div" key={s.slug}>
              <article className="grid overflow-hidden rounded-3xl border border-phd-gray bg-white shadow-sm md:grid-cols-[1fr_1.5fr]">
                <div className={`flex items-center justify-center bg-gradient-to-br p-10 text-white ${TONE[i % TONE.length]}`}>
                  <div className="text-center">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                      <Quote size={28} />
                    </span>
                    <p className="mt-4 text-xl font-extrabold">{s.name}</p>
                    <p className="mt-1 flex items-center justify-center gap-1 text-sm text-white/80">
                      <MapPin size={13} /> {s.location}
                    </p>
                    <p className="mt-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">{s.program}</p>
                  </div>
                </div>
                <div className="p-8 sm:p-10">
                  <h2 className="text-2xl font-bold text-phd-dark">{s.headline}</h2>
                  <p className="mt-4 text-lg italic leading-relaxed text-phd-muted">“{s.quote}”</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
