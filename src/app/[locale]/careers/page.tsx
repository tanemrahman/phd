import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Target, TrendingUp, ShieldCheck, Briefcase, MapPin, ArrowRight, FileText} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import {jobs, tenders} from '@/lib/content';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'careersPage'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function CareersPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

const TYPE_KEY: Record<string, 'typeFulltime' | 'typeContract' | 'typeInternship'> = {
  'Full-time': 'typeFulltime',
  Contract: 'typeContract',
  Internship: 'typeInternship',
};

function Content() {
  const t = useTranslations('careersPage');

  const perks = [
    {Icon: Target, title: t('p1Title'), body: t('p1Desc')},
    {Icon: TrendingUp, title: t('p2Title'), body: t('p2Desc')},
    {Icon: ShieldCheck, title: t('p3Title'), body: t('p3Desc')},
  ];

  const more = [
    {title: t('internTitle'), body: t('internDesc')},
    {title: t('volunteerTitle'), body: t('volunteerDesc')},
    {title: t('talentTitle'), body: t('talentDesc')},
  ];

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image={IMG.volunteer} />

      {/* lead + perks */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-phd-muted">{t('lead')}</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {perks.map(({Icon, title, body}) => (
            <div key={title} className="rounded-2xl border border-phd-gray bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phd-primary/10 text-phd-primary">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-phd-dark">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-phd-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* vacancies */}
      <section className="bg-phd-light py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t('vacanciesTitle')} subtitle={t('vacanciesSubtitle')} />
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border border-phd-gray bg-white shadow-sm">
            <ul className="divide-y divide-phd-gray">
              {jobs.map((j) => (
                <li key={j.title} className="flex flex-wrap items-center gap-4 px-5 py-5 transition-colors hover:bg-phd-light">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-phd-dark">{j.title}</h3>
                      <span className="rounded-full bg-phd-accent/15 px-2.5 py-0.5 text-xs font-semibold text-phd-accent-dark">
                        {t(TYPE_KEY[j.type])}
                      </span>
                    </div>
                    <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-phd-muted">
                      <span className="flex items-center gap-1">
                        <Briefcase size={13} /> {j.unit}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} /> {j.location}
                      </span>
                      <span>
                        {t('closes')}: {j.closing}
                      </span>
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-phd-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-phd-primary-dark"
                  >
                    {t('apply')} <ArrowRight size={15} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* other ways */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t('moreTitle')} />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {more.map((c, i) => (
              <Reveal as="div" key={c.title} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-3xl bg-gradient-to-br from-phd-primary to-phd-primary-light p-7 text-white">
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-white/80">{c.body}</p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-phd-gold px-5 py-2 text-sm font-bold text-phd-dark transition-transform hover:scale-105"
                  >
                    {t('apply')} <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* procurement / tenders */}
      <section className="bg-phd-light py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t('procurementTitle')} subtitle={t('procurementSubtitle')} />
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border border-phd-gray bg-white shadow-sm">
            <ul className="divide-y divide-phd-gray">
              {tenders.map((tender) => (
                <li key={tender.ref} className="flex flex-wrap items-center gap-4 px-5 py-4 transition-colors hover:bg-phd-light">
                  <FileText size={20} className="shrink-0 text-phd-primary" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-phd-dark">{tender.title}</p>
                    <p className="text-xs text-phd-muted">
                      {t('ref')}: {tender.ref} · {t('closes')}: {tender.closing}
                    </p>
                  </div>
                  <span className="rounded-full bg-phd-gray px-2.5 py-0.5 text-xs font-semibold text-phd-muted">
                    {tender.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EOE note */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-phd-accent/30 bg-phd-accent/5 p-7 text-center">
            <p className="text-sm font-medium leading-relaxed text-phd-dark">{t('eoe')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
