import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ArrowRight} from 'lucide-react';

export default function CTABanner() {
  const t = useTranslations('cta');

  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-phd-primary px-8 py-14 text-center sm:py-16">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-phd-accent/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-phd-gold/10 blur-3xl" aria-hidden />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">{t('subtitle')}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-phd-primary shadow-lg transition-transform hover:scale-[1.03]"
          >
            {t('button')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
