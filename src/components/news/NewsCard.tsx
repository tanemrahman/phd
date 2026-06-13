import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {Calendar, ArrowUpRight} from 'lucide-react';

export type NewsItem = {
  slug: string;
  image: string;
  date: string;
  category: string;
  catLabel: string;
  catColor: string;
  title: string;
  excerpt: string;
  readMin: number;
};

export default function NewsCard({item, minReadLabel}: {item: NewsItem; minReadLabel: string}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-phd-gray bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <Link href={`/news/${item.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white ${item.catColor}`}
        >
          {item.catLabel}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-phd-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} /> {item.date}
          </span>
          <span aria-hidden>•</span>
          <span>
            {item.readMin} {minReadLabel}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-bold leading-snug text-phd-dark transition-colors group-hover:text-phd-primary">
          <Link href={`/news/${item.slug}`}>{item.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-phd-muted">{item.excerpt}</p>
        <Link
          href={`/news/${item.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-phd-accent"
        >
          {/* read more arrow */}
          <span className="sr-only">Read</span>
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
