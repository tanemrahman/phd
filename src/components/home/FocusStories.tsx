import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ArrowRight, ArrowUpRight} from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import {IMG} from '@/lib/images';

const STORIES = [
  {img: IMG.healthWorker, slug: 'strengthening-community-health-systems', tag: 's1Tag', title: 's1Title', excerpt: 's1Excerpt'},
  {img: IMG.relief, slug: 'emergency-response-climate-affected-areas', tag: 's2Tag', title: 's2Title', excerpt: 's2Excerpt'},
  {img: IMG.classroom, slug: 'training-next-generation-changemakers', tag: 's3Tag', title: 's3Title', excerpt: 's3Excerpt'},
] as const;

export default function FocusStories() {
  const t = useTranslations('stories');
  const tc = useTranslations('common');

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title={t('title')} subtitle={t('subtitle')} align="left" />
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-phd-primary hover:text-phd-accent"
          >
            {t('viewAll')}
            <ArrowRight size={16} />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal key={s.title} as="article" delay={i * 100}>
              <Link
                href={`/news/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-phd-gray bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={t(s.title)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-phd-gold px-3 py-1 text-xs font-bold text-phd-dark">
                    {t(s.tag)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug text-phd-dark transition-colors group-hover:text-phd-primary">
                    {t(s.title)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-phd-muted">
                    {t(s.excerpt)}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-phd-accent">
                    {tc('readMore')}
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
