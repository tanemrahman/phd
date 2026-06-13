'use client';

import {useState} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import {useTranslations as useT} from 'next-intl';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import {Facebook, Twitter, Linkedin} from '@/components/shared/BrandIcons';
import {Menu, X, Mail, Phone} from 'lucide-react';

const NAV = [
  {href: '/', key: 'home'},
  {href: '/about', key: 'about'},
  {href: '/what-we-do', key: 'whatWeDo'},
  {href: '/where-we-work', key: 'whereWeWork'},
  {href: '/news', key: 'news'},
  {href: '/get-involved', key: 'getInvolved'},
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const tt = useT('topbar');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* top utility bar */}
      <div className="hidden bg-phd-navy-dark text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <span className="font-medium text-white/85">{tt('tagline')}</span>
          <div className="flex items-center gap-5">
            <a href="mailto:kalam@phd-bd.com" className="flex items-center gap-1.5 text-white/85 hover:text-white">
              <Mail size={13} /> kalam@phd-bd.com
            </a>
            <a href="tel:+8801716029405" className="flex items-center gap-1.5 text-white/85 hover:text-white">
              <Phone size={13} /> +880 1716-029405
            </a>
            <span className="flex items-center gap-3 border-l border-white/20 pl-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/80 hover:text-phd-gold"><Facebook size={14} /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white/80 hover:text-phd-gold"><Twitter size={14} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/80 hover:text-phd-gold"><Linkedin size={14} /></a>
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-phd-navy shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="PHD — Partners in Health and Development">
          <Image
            src="/logo.jpg"
            alt="Partners in Health and Development"
            width={135}
            height={154}
            className="h-16 w-auto object-contain sm:h-20"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? 'text-phd-gold'
                  : 'text-white/90 hover:text-phd-gold'
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="hidden rounded-full bg-phd-gold px-4 py-2 text-sm font-bold text-phd-dark transition-transform hover:scale-105 md:inline-block"
          >
            {t('contact')}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-phd-navy lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {[...NAV, {href: '/contact', key: 'contact'}].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-3 text-sm font-semibold transition-colors ${
                  isActive(item.href)
                    ? 'bg-white/10 text-phd-gold'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </nav>
      )}
      </header>
    </>
  );
}
