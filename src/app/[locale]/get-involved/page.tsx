import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Briefcase, Users, Handshake, ArrowRight} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
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

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

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
    </>
  );
}
