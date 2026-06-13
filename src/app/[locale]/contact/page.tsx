import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {MapPin, Mail, Phone} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactForm from '@/components/shared/ContactForm';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'contact'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function ContactPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations('contact');

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} image={IMG.meeting} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-phd-dark">{t('office')}</h2>
            <ul className="mt-5 space-y-4 text-sm text-phd-muted">
              <li className="flex gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-phd-accent" />
                <span>{t('address')}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="shrink-0 text-phd-accent" />
                <a href="mailto:kalam@phd-bd.com" className="hover:text-phd-primary">
                  kalam@phd-bd.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="shrink-0 text-phd-accent" />
                <a href="tel:+8801716029405" className="hover:text-phd-primary">
                  +880 1716-029405
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-phd-gray bg-phd-light p-7 lg:col-span-3">
            <ContactForm />
          </div>
        </div>

        {/* Map */}
        <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-xl font-bold text-phd-dark">{t('mapTitle')}</h2>
          <div className="overflow-hidden rounded-2xl border border-phd-gray shadow-sm">
            <iframe
              title="PHD office location"
              src="https://www.google.com/maps?q=Gulshan-1%2C%20Dhaka-1212%2C%20Bangladesh&z=15&output=embed"
              width="100%"
              height="420"
              style={{border: 0}}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
