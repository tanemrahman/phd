import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {MapPin, AlertTriangle, Lightbulb, TrendingUp} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/home/CTABanner';
import Reveal from '@/components/shared/Reveal';
import {caseStudies} from '@/lib/content';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'caseStudies'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function CaseStudiesPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations('caseStudies');

  const blocks = (c: (typeof caseStudies)[number]) => [
    {Icon: AlertTriangle, label: t('challenge'), body: c.challenge, tone: 'text-phd-gold'},
    {Icon: Lightbulb, label: t('approach'), body: c.approach, tone: 'text-phd-primary'},
    {Icon: TrendingUp, label: t('result'), body: c.result, tone: 'text-phd-accent'},
  ];

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image={IMG.relief} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-phd-muted">{t('lead')}</p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          {caseStudies.map((c) => (
            <Reveal as="div" key={c.title}>
              <article className="overflow-hidden rounded-3xl border border-phd-gray bg-white shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-phd-gray bg-phd-light p-7">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="rounded-full bg-phd-primary/10 px-2.5 py-0.5 font-semibold text-phd-primary">{c.sector}</span>
                      <span className="flex items-center gap-1 text-phd-muted">
                        <MapPin size={13} /> {c.location}
                      </span>
                    </div>
                    <h2 className="mt-3 text-2xl font-bold text-phd-dark">{c.title}</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-extrabold text-phd-accent">{c.stat.value}</p>
                    <p className="max-w-[12rem] text-xs text-phd-muted">{c.stat.label}</p>
                  </div>
                </div>
                <div className="grid gap-6 p-7 md:grid-cols-3">
                  {blocks(c).map((b) => (
                    <div key={b.label}>
                      <div className={`flex items-center gap-2 text-sm font-bold ${b.tone}`}>
                        <b.Icon size={16} /> {b.label}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-phd-muted">{b.body}</p>
                    </div>
                  ))}
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
