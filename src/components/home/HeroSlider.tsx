'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ArrowRight, ChevronDown} from 'lucide-react';
import {IMG} from '@/lib/images';

const SLIDES = [
  {img: IMG.childrenPeace, titleKey: 'slide1Title', subKey: 'slide1Sub'},
  {img: IMG.healthWorker, titleKey: 'slide2Title', subKey: 'slide2Sub'},
  {img: IMG.relief, titleKey: 'slide3Title', subKey: 'slide3Sub'},
] as const;

export default function HeroSlider() {
  const t = useTranslations('hero');
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-phd-dark text-white">
      {/* slides */}
      {SLIDES.map((s, i) => (
        <div
          key={s.img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== active}
        >
          <Image
            src={s.img}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === active ? 'animate-kenburns' : ''}`}
          />
        </div>
      ))}

      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-phd-primary-dark/95 via-phd-primary/80 to-phd-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-phd-dark/80 via-transparent to-phd-dark/30" />

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-phd-gold" />
            {t('tagline')}
          </span>

          {SLIDES.map((s, i) => (
            <div key={s.titleKey} className={i === active ? 'block' : 'hidden'}>
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight drop-shadow sm:text-6xl lg:text-7xl">
                {t(s.titleKey)}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
                {t(s.subKey)}
              </p>
            </div>
          ))}

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/what-we-do"
              className="group inline-flex items-center gap-2 rounded-full bg-phd-gold px-7 py-3.5 text-sm font-bold text-phd-dark shadow-xl transition-transform hover:scale-[1.04]"
            >
              {t('ctaPrimary')}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* dots */}
          <div className="mt-10 flex gap-2.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.img}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-9 bg-phd-gold' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/70 sm:flex">
        <span className="text-xs font-medium uppercase tracking-widest">{t('scroll')}</span>
        <ChevronDown size={20} className="animate-float" />
      </div>
    </section>
  );
}
