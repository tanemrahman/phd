import {useTranslations} from 'next-intl';

const STATS = [
  {key: 'years', value: '30+'},
  {key: 'programs', value: '200+'},
  {key: 'districts', value: '40+'},
  {key: 'partners', value: '50+'},
] as const;

export default function Stats() {
  const t = useTranslations('stats');

  return (
    <section className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-phd-gray sm:p-8 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.key} className="text-center">
            <div className="text-3xl font-extrabold text-phd-primary sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm font-medium text-phd-muted">{t(s.key)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
