import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Check, ArrowRight} from 'lucide-react';
import {IMG} from '@/lib/images';
import Reveal from '@/components/shared/Reveal';

export default function ImpactBand() {
  const t = useTranslations('impact');
  const bullets = ['b1', 'b2', 'b3', 'b4'];

  return (
    <section className="overflow-hidden py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* images */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl sm:aspect-[5/4]">
            <Image
              src={IMG.classroom}
              alt="PHD community programs in the field"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-3 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:-right-6 lg:w-52">
            <div className="relative aspect-square">
              <Image src={IMG.heartHands} alt="" fill sizes="220px" className="object-cover" />
            </div>
          </div>
          <div
            className="absolute -left-5 -top-5 -z-10 h-32 w-32 rounded-3xl bg-phd-accent/20"
            aria-hidden
          />
        </Reveal>

        {/* text */}
        <Reveal delay={120}>
          <span className="mb-3 inline-block h-1 w-12 rounded-full bg-phd-accent" aria-hidden />
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-phd-dark sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg font-medium text-phd-dark">{t('subtitle')}</p>
          <p className="mt-3 leading-relaxed text-phd-muted">{t('lead')}</p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-phd-accent/15 text-phd-accent">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-phd-dark">{t(b)}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-phd-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-phd-primary-dark"
          >
            {t('cta')}
            <ArrowRight size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
