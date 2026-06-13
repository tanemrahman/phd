import {setRequestLocale} from 'next-intl/server';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Programs from '@/components/home/Programs';
import AboutPreview from '@/components/home/AboutPreview';
import CTABanner from '@/components/home/CTABanner';

type Props = {params: Promise<{locale: string}>};

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <Programs />
      <CTABanner />
    </>
  );
}
