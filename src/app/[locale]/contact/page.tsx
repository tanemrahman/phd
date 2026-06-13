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
          <div className="space-y-4 lg:col-span-2">
            <ContactCard Icon={MapPin} label={t('office')}>
              {t('address')}
            </ContactCard>
            <ContactCard Icon={Mail} label={t('emailLabel')}>
              <a href="mailto:kalam@phd-bd.com" className="transition-colors hover:text-phd-primary">
                kalam@phd-bd.com
              </a>
            </ContactCard>
            <ContactCard Icon={Phone} label={t('phoneLabel')}>
              <a href="tel:+8801716029405" className="transition-colors hover:text-phd-primary">
                +880 1716-029405
              </a>
            </ContactCard>
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
              src="https://www.google.com/maps?q=House%20SWD%2012%2FA%2C%20Road%2008%2C%20Gulshan-1%2C%20Dhaka-1212%2C%20Bangladesh&z=17&output=embed"
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

function ContactCard({
  Icon,
  label,
  children,
}: {
  Icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-phd-gray bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-phd-accent hover:shadow-lg">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-phd-primary/10 text-phd-primary">
        <Icon size={22} />
      </span>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-phd-primary">{label}</h3>
        <p className="mt-1 text-sm leading-relaxed text-phd-muted">{children}</p>
      </div>
    </div>
  );
}
