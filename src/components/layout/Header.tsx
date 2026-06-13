'use client';

import {useState} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import {Facebook, Twitter, Linkedin} from '@/components/shared/BrandIcons';
import {Menu, X, Mail, Phone, ChevronDown} from 'lucide-react';
import {PROGRAMS} from '@/lib/programs';

type Leaf = {key: string; href: string; ns?: 'nav' | 'programs'};
type Entry = {key: string; href?: string; children?: Leaf[]};

const PROGRAM_LINKS: Leaf[] = [
  {key: 'overview', href: '/what-we-do', ns: 'nav'},
  ...PROGRAMS.map((p) => ({key: p.key, href: `/what-we-do/${p.slug}`, ns: 'programs' as const})),
];

const NAV: Entry[] = [
  {key: 'home', href: '/'},
  {
    key: 'about',
    children: [
      {key: 'aboutUs', href: '/about'},
      {key: 'board', href: '/about/board'},
      {key: 'team', href: '/about/team'},
      {key: 'partners', href: '/partners'},
    ],
  },
  {key: 'whatWeDo', href: '/what-we-do', children: PROGRAM_LINKS},
  {key: 'whereWeWork', href: '/where-we-work'},
  {
    key: 'more',
    children: [
      {key: 'stories', href: '/stories'},
      {key: 'caseStudies', href: '/case-studies'},
      {key: 'annualReports', href: '/knowledge'},
      {key: 'auditReports', href: '/transparency'},
      {key: 'news', href: '/news'},
    ],
  },
  {
    key: 'getInvolved',
    href: '/get-involved',
    children: [
      {key: 'overview', href: '/get-involved', ns: 'nav'},
      {key: 'careers', href: '/careers'},
      {key: 'projects', href: '/projects'},
    ],
  },
  {key: 'contact', href: '/contact'},
];

export default function Header() {
  const t = useTranslations('nav');
  const tp = useTranslations('programs');
  const tt = useTranslations('topbar');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const isActive = (href?: string) =>
    !href ? false : href === '/' ? pathname === '/' : pathname.startsWith(href);

  const label = (leaf: Leaf) => (leaf.ns === 'programs' ? tp(`${leaf.key}.title`) : t(leaf.key));

  const groupActive = (e: Entry) =>
    isActive(e.href) || (e.children?.some((c) => isActive(c.href)) ?? false);

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

          {/* desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((entry) =>
              entry.children ? (
                <div key={entry.key} className="group relative">
                  <button
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                      groupActive(entry) ? 'text-phd-gold' : 'text-white/90 hover:text-phd-gold'
                    }`}
                  >
                    {t(entry.key)}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[16rem] translate-y-1 rounded-xl border border-phd-gray bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {entry.children.map((leaf) => (
                      <Link
                        key={leaf.href + leaf.key}
                        href={leaf.href}
                        className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          isActive(leaf.href)
                            ? 'bg-phd-primary/10 text-phd-primary'
                            : 'text-phd-dark hover:bg-phd-light hover:text-phd-primary'
                        }`}
                      >
                        {label(leaf)}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={entry.key}
                  href={entry.href!}
                  className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive(entry.href) ? 'text-phd-gold' : 'text-white/90 hover:text-phd-gold'
                  }`}
                >
                  {t(entry.key)}
                </Link>
              )
            )}
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

        {/* mobile nav */}
        {open && (
          <nav className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-phd-navy lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
              {NAV.map((entry) =>
                entry.children ? (
                  <div key={entry.key} className="border-b border-white/5">
                    <button
                      onClick={() => setOpenGroup((g) => (g === entry.key ? null : entry.key))}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-semibold ${
                        groupActive(entry) ? 'text-phd-gold' : 'text-white/90'
                      }`}
                    >
                      {t(entry.key)}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${openGroup === entry.key ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openGroup === entry.key && (
                      <div className="pb-2 pl-3">
                        {entry.children.map((leaf) => (
                          <Link
                            key={leaf.href + leaf.key}
                            href={leaf.href}
                            onClick={() => setOpen(false)}
                            className={`block rounded-md px-3 py-2.5 text-sm transition-colors ${
                              isActive(leaf.href) ? 'text-phd-gold' : 'text-white/80 hover:bg-white/10'
                            }`}
                          >
                            {label(leaf)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={entry.key}
                    href={entry.href!}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-3 text-sm font-semibold transition-colors ${
                      isActive(entry.href) ? 'bg-white/10 text-phd-gold' : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {t(entry.key)}
                  </Link>
                )
              )}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
