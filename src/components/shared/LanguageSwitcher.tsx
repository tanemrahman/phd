'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {useTransition} from 'react';
import {Globe} from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const nextLocale = locale === 'en' ? 'bn' : 'en';
  const label = locale === 'en' ? 'বাংলা' : 'English';

  const handleSwitch = () => {
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  };

  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      className="flex items-center gap-1.5 rounded-full border border-phd-primary px-3 py-1.5 text-sm font-semibold text-phd-primary transition-colors duration-200 hover:bg-phd-primary hover:text-white disabled:opacity-50"
      aria-label={`Switch to ${label}`}
    >
      <Globe size={15} />
      <span>{label}</span>
    </button>
  );
}
