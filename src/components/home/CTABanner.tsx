import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ArrowRight} from 'lucide-react';
import {IMG} from '@/lib/images';

export default function CTABanner() {
  const t = useTranslations('cta');

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-8 py-16 text-center sm:py-20">
        <Image src={IMG.childrenCommunity} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-phd-primary-dark/95 via-phd-primary/90 to-phd-primary/80" />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-phd-gold/20 blur-3xl" aria-hidden />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">{t('subtitle')}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-phd-gold px-8 py-3.5 text-sm font-bold text-phd-dark shadow-xl transition-transform hover:scale-[1.04]"
          >
            {t('button')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
