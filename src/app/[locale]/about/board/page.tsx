import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/home/CTABanner';
import Reveal from '@/components/shared/Reveal';
import {board} from '@/lib/content';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'board'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function BoardPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations('board');
  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image={IMG.meeting} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-phd-muted">{t('lead')}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {board.map((p, i) => (
            <Reveal as="div" key={p.name} delay={(i % 3) * 80}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-phd-gray bg-white p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-phd-primary to-phd-accent text-2xl font-extrabold text-white">
                  {p.initials}
                </span>
                <h3 className="mt-5 text-lg font-bold text-phd-dark">{p.name}</h3>
                <p className="text-sm font-semibold text-phd-accent">{p.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-phd-muted">{p.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
