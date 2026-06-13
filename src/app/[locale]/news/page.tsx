import {setRequestLocale, getTranslations} from 'next-intl/server';
import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {Calendar, ArrowRight} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import NewsExplorer from '@/components/news/NewsExplorer';
import type {NewsItem} from '@/components/news/NewsCard';
import {getAllArticles, formatDate, CATEGORY_COLORS, type CategoryKey} from '@/lib/news';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'news'});
  return {title: t('title'), description: t('subtitle')};
}

function readMinutes(words: number) {
  return Math.max(1, Math.round(words / 180));
}

export default async function NewsPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'news'});
  const tc = await getTranslations({locale, namespace: 'common'});
  const loc = locale === 'bn' ? 'bn' : 'en';

  const all = getAllArticles();
  const featured = all.find((a) => a.featured) ?? all[0];
  const rest = all.filter((a) => a.slug !== featured.slug);

  const items: NewsItem[] = rest.map((a) => ({
    slug: a.slug,
    image: a.image,
    date: formatDate(a.date, loc),
    category: a.category,
    catLabel: t(`cat.${a.category}`),
    catColor: CATEGORY_COLORS[a.category],
    title: a.title[loc],
    excerpt: a.excerpt[loc],
    readMin: readMinutes(a.body[loc].join(' ').split(/\s+/).length),
  }));

  const cats = (Object.keys(CATEGORY_COLORS) as CategoryKey[])
    .filter((c) => rest.some((a) => a.category === c))
    .map((c) => ({key: c, label: t(`cat.${c}`)}));

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image={IMG.classroom} />

      {/* Featured */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/news/${featured.slug}`}
            className="group grid items-center gap-8 overflow-hidden rounded-3xl border border-phd-gray bg-white lg:grid-cols-2"
          >
            <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[360px]">
              <Image
                src={featured.image}
                alt={featured.title[loc]}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <span className="absolute left-5 top-5 rounded-full bg-phd-gold px-3 py-1 text-xs font-bold text-phd-dark">
                {t('featured')}
              </span>
            </div>
            <div className="p-7 lg:p-10">
              <div className="flex items-center gap-3 text-xs font-medium text-phd-muted">
                <span
                  className={`rounded-full px-3 py-1 text-white ${CATEGORY_COLORS[featured.category]}`}
                >
                  {t(`cat.${featured.category}`)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} /> {formatDate(featured.date, loc)}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-extrabold leading-tight text-phd-dark transition-colors group-hover:text-phd-primary sm:text-3xl">
                {featured.title[loc]}
              </h2>
              <p className="mt-3 leading-relaxed text-phd-muted">{featured.excerpt[loc]}</p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-phd-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-phd-primary-dark">
                {tc('readMore')}
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All articles, filterable */}
      <section className="bg-phd-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-phd-dark sm:text-3xl">{t('latest')}</h2>
          <NewsExplorer
            items={items}
            categories={cats}
            allLabel={t('all')}
            minReadLabel={t('minRead')}
          />
        </div>
      </section>
    </>
  );
}
