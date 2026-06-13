import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/home/CTABanner';
import ProjectsExplorer from '@/components/projects/ProjectsExplorer';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'projects'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function ProjectsPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations('projects');
  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image={IMG.relief} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectsExplorer />
        </div>
      </section>
      <CTABanner />
    </>
  );
}
