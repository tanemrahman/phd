import {setRequestLocale, getTranslations} from 'next-intl/server';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {Link} from '@/i18n/navigation';
import {Calendar, Clock, ArrowLeft} from 'lucide-react';
import {routing} from '@/i18n/routing';
import ShareButtons from '@/components/news/ShareButtons';
import NewsCard, {type NewsItem} from '@/components/news/NewsCard';
import {
  ARTICLES,
  getArticle,
  getRelated,
  formatDate,
  CATEGORY_COLORS,
} from '@/lib/news';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string; slug: string}>};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ARTICLES.map((a) => ({locale, slug: a.slug}))
  );
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale, slug} = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const loc = locale === 'bn' ? 'bn' : 'en';
  return {
    title: a.title[loc],
    description: a.excerpt[loc],
    openGraph: {images: [a.image], type: 'article'},
  };
}

export default async function ArticlePage({params}: Props) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const loc = locale === 'bn' ? 'bn' : 'en';

  const a = getArticle(slug);
  if (!a) notFound();

  const t = await getTranslations({locale, namespace: 'news'});
  const words = a.body[loc].join(' ').split(/\s+/).length;
  const readMin = Math.max(1, Math.round(words / 180));

  const related = getRelated(slug);
  const relatedItems: NewsItem[] = related.map((r) => ({
    slug: r.slug,
    image: r.image,
    date: formatDate(r.date, loc),
    category: r.category,
    catLabel: t(`cat.${r.category}`),
    catColor: CATEGORY_COLORS[r.category],
    title: r.title[loc],
    excerpt: r.excerpt[loc],
    readMin: Math.max(1, Math.round(r.body[loc].join(' ').split(/\s+/).length / 180)),
  }));

  return (
    <>
      {/* Article hero */}
      <section className="relative overflow-hidden bg-phd-navy text-white">
        <Image src={a.image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-phd-dark/95 via-phd-primary-dark/85 to-phd-primary-dark/70" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} /> {t('back')}
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className={`rounded-full px-3 py-1 font-bold ${CATEGORY_COLORS[a.category]}`}>
              {t(`cat.${a.category}`)}
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/85">
              <Calendar size={14} /> {formatDate(a.date, loc)}
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/85">
              <Clock size={14} /> {readMin} {t('minRead')}
            </span>
          </div>
          <h1 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {a.title[loc]}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <article className="py-14 sm:py-18">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xl font-medium leading-relaxed text-phd-dark">{a.excerpt[loc]}</p>
          <div className="mt-6 space-y-5">
            {a.body[loc].map((para, i) => (
              <p key={i} className="leading-relaxed text-phd-muted">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-phd-gray pt-6">
            <ShareButtons label={t('share')} />
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-phd-primary hover:text-phd-accent"
            >
              <ArrowLeft size={16} /> {t('back')}
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      {relatedItems.length > 0 && (
        <section className="bg-phd-light py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-extrabold text-phd-dark sm:text-3xl">
              {t('related')}
            </h2>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {relatedItems.map((item) => (
                <NewsCard key={item.slug} item={item} minReadLabel={t('minRead')} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
