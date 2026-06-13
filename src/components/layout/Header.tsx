'use client';

import {useState} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import {Menu, X} from 'lucide-react';

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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-phd-gray bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="PHD Home">
          <Image
            src="/logo.jpg"
            alt="Partners in Health and Development"
            width={56}
            height={56}
            className="h-12 w-12 rounded-md object-contain"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-lg font-extrabold tracking-tight text-phd-primary">PHD</span>
            <span className="text-[11px] font-medium text-phd-muted">
              Partners in Health and Development
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? 'text-phd-primary'
                  : 'text-phd-dark hover:text-phd-primary'
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
            className="hidden rounded-full bg-phd-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-phd-primary-dark md:inline-block"
          >
            {t('contact')}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-phd-primary lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-phd-gray bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {[...NAV, {href: '/contact', key: 'contact'}].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-3 text-sm font-semibold transition-colors ${
                  isActive(item.href)
                    ? 'bg-phd-light text-phd-primary'
                    : 'text-phd-dark hover:bg-phd-light'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
