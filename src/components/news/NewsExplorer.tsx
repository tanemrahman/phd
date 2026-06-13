'use client';

import {useMemo, useState} from 'react';
import NewsCard, {type NewsItem} from './NewsCard';

type Category = {key: string; label: string};

export default function NewsExplorer({
  items,
  categories,
  allLabel,
  minReadLabel,
}: {
  items: NewsItem[];
  categories: Category[];
  allLabel: string;
  minReadLabel: string;
}) {
  const [active, setActive] = useState<string>('all');

  const filtered = useMemo(
    () => (active === 'all' ? items : items.filter((i) => i.category === active)),
    [active, items]
  );

  const pills: Category[] = [{key: 'all', label: allLabel}, ...categories];

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {pills.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === c.key
                ? 'bg-phd-primary text-white'
                : 'border border-phd-gray bg-white text-phd-dark hover:border-phd-primary hover:text-phd-primary'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <NewsCard key={item.slug} item={item} minReadLabel={minReadLabel} />
        ))}
      </div>
    </div>
  );
}
