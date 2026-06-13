import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Newspaper} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'news'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function NewsPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations('news');

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} image={IMG.classroom} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-phd-primary/10 text-phd-primary">
            <Newspaper size={30} />
          </div>
          <p className="mt-6 text-lg text-phd-muted">{t('empty')}</p>
        </div>
      </section>
    </>
  );
}
