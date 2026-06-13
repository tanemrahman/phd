import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {MapPin, Mail, Phone} from 'lucide-react';
import {Facebook, Instagram, Twitter, Youtube, Linkedin, WhatsApp} from '@/components/shared/BrandIcons';

const SOCIALS = [
  {href: 'https://www.facebook.com/', label: 'Facebook', Icon: Facebook},
  {href: 'https://www.instagram.com/', label: 'Instagram', Icon: Instagram},
  {href: 'https://twitter.com/', label: 'Twitter', Icon: Twitter},
  {href: 'https://wa.me/8801716029405', label: 'WhatsApp', Icon: WhatsApp},
  {href: 'https://www.youtube.com/', label: 'YouTube', Icon: Youtube},
  {href: 'https://www.linkedin.com/', label: 'LinkedIn', Icon: Linkedin},
];

const QUICK_LINKS = [
  {href: '/about', key: 'about'},
  {href: '/what-we-do', key: 'whatWeDo'},
  {href: '/where-we-work', key: 'whereWeWork'},
  {href: '/news', key: 'news'},
  {href: '/get-involved', key: 'getInvolved'},
  {href: '/contact', key: 'contact'},
] as const;

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const tp = useTranslations('programs');
  const year = 2026;

  return (
    <footer className="bg-phd-dark text-phd-gray">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="PHD"
              width={48}
              height={48}
              className="h-11 w-11 rounded-md object-contain"
            />
            <span className="text-lg font-extrabold text-white">PHD</span>
          </div>
          <p className="text-sm leading-relaxed text-phd-gray/80">{t('about')}</p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(({href, label, Icon}) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-phd-accent"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            {t('quickLinks')}
          </h3>
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-phd-gray/80 transition-colors hover:text-white">
                  {tn(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            {t('programs')}
          </h3>
          <ul className="space-y-2.5 text-sm">
            {['grant', 'implementation', 'technical', 'capacity', 'academic', 'humanitarian'].map(
              (k) => (
                <li key={k}>
                  <Link
                    href="/what-we-do"
                    className="text-phd-gray/80 transition-colors hover:text-white"
                  >
                    {tp(`${k}.title`)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            {t('contact')}
          </h3>
          <ul className="space-y-3 text-sm text-phd-gray/80">
            <li className="flex gap-2.5">
              <MapPin size={17} className="mt-0.5 shrink-0 text-phd-accent" />
              <span>House # SWD 12/A, Road # 08, Gulshan-1, Dhaka-1212, Bangladesh</span>
            </li>
            <li className="flex gap-2.5">
              <Mail size={17} className="shrink-0 text-phd-accent" />
              <a href="mailto:kalam@phd-bd.com" className="hover:text-white">
                kalam@phd-bd.com
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone size={17} className="shrink-0 text-phd-accent" />
              <a href="tel:+8801716029405" className="hover:text-white">
                +880 1716-029405
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-phd-gray/70 sm:px-6 lg:px-8">
          © {year} Partners in Health and Development (PHD). {t('rights')}
        </div>
      </div>
    </footer>
  );
}
