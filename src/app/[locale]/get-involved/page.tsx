import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Briefcase, Users, Handshake, ArrowRight, Award, Globe, ShieldCheck, Sprout} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'getInvolved'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function GetInvolvedPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations('getInvolved');
  const tc = useTranslations('common');

  const cards = [
    {Icon: Briefcase, title: t('careers'), body: t('careersDesc')},
    {Icon: Users, title: t('consulting'), body: t('consultingDesc')},
    {Icon: Handshake, title: t('partnership'), body: t('partnershipDesc')},
  ];

  const why = [
    {Icon: Award, title: t('w1Title'), body: t('w1Desc')},
    {Icon: Globe, title: t('w2Title'), body: t('w2Desc')},
    {Icon: ShieldCheck, title: t('w3Title'), body: t('w3Desc')},
    {Icon: Sprout, title: t('w4Title'), body: t('w4Desc')},
  ];

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} image={IMG.volunteer} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {cards.map(({Icon, title, body}) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-phd-gray bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-phd-primary/10 text-phd-primary">
                <Icon size={26} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-phd-dark">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-phd-muted">{body}</p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-phd-accent"
              >
                {tc('getInTouch')}
                <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why partner — infographic band */}
      <section className="bg-phd-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t('whyTitle')} subtitle={t('whySubtitle')} />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(({Icon, title, body}, i) => (
              <Reveal as="div" key={title} delay={(i % 4) * 90}>
                <div className="relative h-full overflow-hidden rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-phd-gray">
                  <span
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-phd-primary to-phd-accent"
                    aria-hidden
                  />
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-phd-primary to-phd-accent text-white shadow-md">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-phd-dark">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-phd-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
