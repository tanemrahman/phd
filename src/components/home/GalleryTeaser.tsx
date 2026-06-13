import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ArrowRight} from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import {IMG} from '@/lib/images';

const TILES = [
  {img: IMG.childrenPeace, span: 'sm:col-span-2 sm:row-span-2'},
  {img: IMG.healthWorker, span: ''},
  {img: IMG.relief, span: ''},
  {img: IMG.giving, span: ''},
  {img: IMG.meeting, span: ''},
];

export default function GalleryTeaser() {
  const t = useTranslations('gallery');

  return (
    <section className="bg-phd-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-4">
            {TILES.map((tile, i) => (
              <div
                key={tile.img}
                className={`group relative overflow-hidden rounded-2xl ${tile.span}`}
              >
                <Image
                  src={tile.img}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-phd-primary/0 transition-colors duration-300 group-hover:bg-phd-primary/25" />
                {i === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-phd-dark/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full border border-phd-primary px-6 py-3 text-sm font-semibold text-phd-primary transition-colors hover:bg-phd-primary hover:text-white"
          >
            {t('cta')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
