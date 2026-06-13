import {useTranslations} from 'next-intl';

// Placeholder partner names — swap for real partner logos when available.
const PARTNERS = [
  'Govt. of Bangladesh',
  'WHO',
  'UNICEF',
  'UNHCR',
  'World Bank',
  'USAID',
  'DGHS',
  'Global Fund',
  'UNFPA',
  'GIZ',
];

export default function Partners() {
  const t = useTranslations('partners');
  const row = [...PARTNERS, ...PARTNERS];

  return (
    <section className="border-y border-phd-gray bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-phd-dark sm:text-2xl">{t('title')}</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-phd-muted">{t('subtitle')}</p>
      </div>

      <div className="marquee-mask mt-9 overflow-hidden">
        <div className="marquee-track gap-4">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex h-16 shrink-0 items-center justify-center rounded-xl border border-phd-gray bg-phd-light px-8 text-sm font-bold uppercase tracking-wide text-phd-primary/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
