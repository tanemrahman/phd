import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ArrowRight} from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-phd-primary text-white">
      {/* decorative gradient + grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-phd-primary-dark via-phd-primary to-phd-primary-light" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-phd-accent/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-phd-gold/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
            {t('tagline')}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            {t('subtitle')}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-phd-primary shadow-lg transition-transform hover:scale-[1.03]"
            >
              {t('ctaPrimary')}
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
