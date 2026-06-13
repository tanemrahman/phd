import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Inter, Noto_Sans_Bengali} from 'next/font/google';
import {routing} from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';
import type {Metadata} from 'next';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

const bangla = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-bangla',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const isBn = locale === 'bn';
  return {
    metadataBase: new URL('https://www.phd-bd.com'),
    title: {
      default: isBn
        ? 'পার্টনার্স ইন হেলথ অ্যান্ড ডেভেলপমেন্ট (PHD)'
        : 'Partners in Health and Development (PHD)',
      template: isBn
        ? '%s | PHD বাংলাদেশ'
        : '%s | PHD Bangladesh',
    },
    description: isBn
      ? 'পার্টনার্স ইন হেলথ অ্যান্ড ডেভেলপমেন্ট (PHD) — জনস্বাস্থ্য, মানবিক সাড়া, জলবায়ু সহনশীলতা ও সক্ষমতা উন্নয়নে ৩০+ বছরের অভিজ্ঞতা সম্পন্ন বাংলাদেশের জাতীয় অলাভজনক সংস্থা।'
      : 'Partners in Health and Development (PHD) — a Bangladeshi national non-profit with 30+ years in public health, humanitarian response, climate resilience and capacity development.',
    keywords: [
      'PHD',
      'Partners in Health and Development',
      'NGO Bangladesh',
      'public health',
      'humanitarian',
      'capacity development',
    ],
    openGraph: {
      siteName: 'Partners in Health and Development (PHD)',
      locale: isBn ? 'bn_BD' : 'en_US',
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as 'en' | 'bn')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className={`${inter.variable} ${bangla.variable} flex min-h-screen flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </div>
    </NextIntlClientProvider>
  );
}
