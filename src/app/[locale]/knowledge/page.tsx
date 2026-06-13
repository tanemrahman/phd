import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {FileText, ExternalLink, Download, Play, ArrowRight} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import {publications, type PublicationType} from '@/lib/content';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'knowledge'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function KnowledgePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

const TYPE_LABEL: Record<PublicationType, string> = {
  'Annual Report': 'typeAnnual',
  Research: 'typeResearch',
  'Policy Brief': 'typePolicy',
  Evaluation: 'typeEvaluation',
  Financial: 'typeFinancial',
  Newsletter: 'typeNewsletter',
};

const TYPE_TONE: Record<PublicationType, string> = {
  'Annual Report': 'bg-phd-primary/10 text-phd-primary',
  Research: 'bg-phd-accent/15 text-phd-accent-dark',
  'Policy Brief': 'bg-phd-gold/20 text-phd-gold',
  Evaluation: 'bg-phd-primary/10 text-phd-primary',
  Financial: 'bg-phd-gray text-phd-muted',
  Newsletter: 'bg-phd-accent/15 text-phd-accent-dark',
};

function Content() {
  const t = useTranslations('knowledge');
  const annual = publications.filter((p) => p.type === 'Annual Report');
  const rest = publications.filter((p) => p.type !== 'Annual Report');

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image={IMG.classroom} />

      {/* lead */}
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-phd-muted">{t('lead')}</p>
        </div>
      </section>

      {/* annual reports */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t('annualTitle')} subtitle={t('annualSubtitle')} />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {annual.map((p, i) => (
              <Reveal as="div" key={p.title} delay={(i % 2) * 80}>
                <div
                  className={`flex h-full items-center gap-6 rounded-3xl p-7 shadow-sm ${
                    i === 0
                      ? 'bg-gradient-to-br from-phd-primary to-phd-primary-light text-white'
                      : 'border border-phd-gray bg-white'
                  }`}
                >
                  <div
                    className={`grid h-20 w-16 shrink-0 place-items-center rounded-xl ${
                      i === 0 ? 'bg-white/15' : 'bg-phd-light'
                    }`}
                  >
                    <FileText size={30} className={i === 0 ? 'text-phd-gold' : 'text-phd-primary'} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-xs font-semibold uppercase tracking-wide ${i === 0 ? 'text-phd-gold' : 'text-phd-accent'}`}>
                      {p.year} · {p.pages} {t('pages')}
                    </p>
                    <h3 className="mt-1 text-xl font-bold leading-tight">{p.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button
                        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold ${
                          i === 0 ? 'bg-phd-gold text-phd-dark' : 'bg-phd-primary text-white'
                        }`}
                      >
                        <ExternalLink size={15} /> {t('readOnline')}
                      </button>
                      <button
                        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold ring-1 ${
                          i === 0 ? 'text-white ring-white/30' : 'text-phd-primary ring-phd-primary/20'
                        }`}
                      >
                        <Download size={15} /> {t('pdf')}
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* publications library */}
      <section className="bg-phd-light py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t('libraryTitle')} subtitle={t('librarySubtitle')} />
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border border-phd-gray bg-white shadow-sm">
            <ul className="divide-y divide-phd-gray">
              {rest.map((p) => (
                <li key={p.title} className="flex flex-wrap items-center gap-4 px-5 py-4 transition-colors hover:bg-phd-light">
                  <FileText size={22} className="shrink-0 text-phd-primary" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-phd-dark">{p.title}</p>
                    <p className="text-xs text-phd-muted">
                      {p.year} · {p.pages} {t('pages')}
                    </p>
                  </div>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${TYPE_TONE[p.type]}`}>
                    {t(TYPE_LABEL[p.type])}
                  </span>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-phd-light px-4 py-2 text-sm font-semibold text-phd-primary hover:bg-phd-primary/10">
                    <Download size={15} /> {t('download')}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* media gallery */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t('galleryTitle')} subtitle={t('gallerySubtitle')} />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              IMG.childrenPeace,
              IMG.classroom,
              IMG.healthWorker,
              IMG.relief,
              IMG.volunteer,
              IMG.heartHands,
              IMG.childrenCommunity,
              IMG.giving,
            ].map((src, i) => (
              <div
                key={src}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-phd-gray"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <span className="absolute inset-0 bg-phd-primary/20 transition-colors group-hover:bg-phd-primary/40" />
                {i % 3 === 0 && (
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-phd-primary">
                      <Play size={22} />
                    </span>
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-phd-accent hover:underline">
              {t('mediaCta')} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
