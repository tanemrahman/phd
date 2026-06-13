import {setRequestLocale} from 'next-intl/server';
import HeroSlider from '@/components/home/HeroSlider';
import Stats from '@/components/home/Stats';
import ImpactBand from '@/components/home/ImpactBand';
import Approach from '@/components/home/Approach';
import Programs from '@/components/home/Programs';
import FocusStories from '@/components/home/FocusStories';
import Partners from '@/components/home/Partners';
import GalleryTeaser from '@/components/home/GalleryTeaser';
import CTABanner from '@/components/home/CTABanner';

type Props = {params: Promise<{locale: string}>};

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSlider />
      <Stats />
      <ImpactBand />
      <Approach />
      <Programs />
      <FocusStories />
      <Partners />
      <GalleryTeaser />
      <CTABanner />
    </>
  );
}
