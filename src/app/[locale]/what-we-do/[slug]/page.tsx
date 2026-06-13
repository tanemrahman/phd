import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {notFound} from 'next/navigation';
import {Link} from '@/i18n/navigation';
import {ArrowLeft, ArrowRight, Check} from 'lucide-react';
import {routing} from '@/i18n/routing';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/home/CTABanner';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import {PROGRAMS, programBySlug} from '@/lib/programs';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string; slug: string}>};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    PROGRAMS.map((p) => ({locale, slug: p.slug}))
  );
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale, slug} = await params;
  const program = programBySlug(slug);
  if (!program) return {};
  const t = await getTranslations({locale, namespace: 'programs'});
  return {title: t(`${program.key}.title`), description: t(`${program.key}.desc`)};
}

export default async function ProgramDetailPage({params}: Props) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const program = programBySlug(slug);
  if (!program) notFound();
  return <Content slug={slug} />;
}

const HERO_IMG = [IMG.healthWorker, IMG.classroom, IMG.meeting, IMG.volunteer, IMG.childrenCommunity, IMG.relief];

function Content({slug}: {slug: string}) {
  const t = useTranslations('programs');
  const program = programBySlug(slug)!;
  const key = program.key;
  const idx = PROGRAMS.findIndex((p) => p.slug === slug);
  const activities = ['a1', 'a2', 'a3', 'a4'] as const;
  const related = PROGRAMS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero title={t(`${key}.title`)} subtitle={t(`${key}.desc`)} image={HERO_IMG[idx % HERO_IMG.length]} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          {/* main */}
          <div className="lg:col-span-3">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-phd-accent hover:underline"
            >
              <ArrowLeft size={15} /> {t('back')}
            </Link>
            <div className="mt-5 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-phd-primary text-white">
                <program.Icon size={26} />
              </span>
              <span className="text-sm font-semibold text-phd-accent">
                {String(idx + 1).padStart(2, '0')} · {t('detailKicker')}
              </span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-phd-dark">{t(`${key}.long`)}</p>
          </div>

          {/* activities */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-phd-gray bg-phd-light p-7">
              <h2 className="text-lg font-bold text-phd-dark">{t('activitiesTitle')}</h2>
              <ul className="mt-4 space-y-3">
                {activities.map((a) => (
                  <li key={a} className="flex gap-3 text-sm text-phd-muted">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-phd-accent/15 text-phd-accent">
                      <Check size={13} />
                    </span>
                    {t(`${key}.${a}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* related programmes */}
      <section className="bg-phd-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t('relatedTitle')} />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal as="div" key={p.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/what-we-do/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-phd-gray bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-phd-primary/10 text-phd-primary transition-colors group-hover:bg-phd-primary group-hover:text-white">
                    <p.Icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-phd-dark">{t(`${p.key}.title`)}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-phd-muted">{t(`${p.key}.desc`)}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-phd-accent">
                    {t('exploreAll')}
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
