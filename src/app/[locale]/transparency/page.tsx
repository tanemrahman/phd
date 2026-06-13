import {setRequestLocale, getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {
  FileText,
  Download,
  ShieldCheck,
  Users,
  Scale,
  Megaphone,
  Target,
  Lock,
  Phone,
  Mail,
  Globe,
  MapPin,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import {auditDocs, incomeSplit, policies} from '@/lib/content';
import {IMG} from '@/lib/images';
import type {Metadata} from 'next';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'transparency'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function TransparencyPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <Content />;
}

const POLICY_META: Record<string, {key: string; Icon: LucideIcon}> = {
  safeguarding: {key: 'polSafeguarding', Icon: ShieldCheck},
  childProtection: {key: 'polChildProtection', Icon: Users},
  antiCorruption: {key: 'polAntiCorruption', Icon: Scale},
  whistleblower: {key: 'polWhistleblower', Icon: Megaphone},
  conflictInterest: {key: 'polConflictInterest', Icon: Target},
  dataProtection: {key: 'polDataProtection', Icon: Lock},
};

const INCOME_LABEL: Record<string, string> = {
  institutional: 'incInstitutional',
  un: 'incUn',
  foundations: 'incFoundations',
  individual: 'incIndividual',
};

function Content() {
  const t = useTranslations('transparency');

  const channels = [
    {Icon: Phone, title: t('chHotline'), val: t('chHotlineVal')},
    {Icon: Mail, title: t('chEmail'), val: t('chEmailVal')},
    {Icon: Globe, title: t('chWeb'), val: t('chWebVal')},
    {Icon: MapPin, title: t('chPerson'), val: t('chPersonVal')},
  ];

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image={IMG.meeting} />

      {/* lead */}
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-phd-muted">{t('lead')}</p>
        </div>
      </section>

      {/* financials & audit */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t('financialsTitle')} subtitle={t('financialsSubtitle')} align="left" />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-phd-gray bg-white shadow-sm">
              <ul className="divide-y divide-phd-gray">
                {auditDocs.map((d) => (
                  <li key={d.title} className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-phd-light">
                    <FileText size={22} className="shrink-0 text-phd-primary" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-phd-dark">{d.title}</p>
                      <p className="text-xs text-phd-muted">{d.year}</p>
                    </div>
                    <span className="rounded-full bg-phd-gray px-2.5 py-0.5 text-xs font-semibold text-phd-muted">{d.type}</span>
                    <button className="inline-flex items-center gap-1.5 rounded-full bg-phd-light px-4 py-2 text-sm font-semibold text-phd-primary hover:bg-phd-primary/10">
                      <Download size={15} /> {t('download')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-phd-primary p-8 text-white">
              <h3 className="text-lg font-bold">{t('incomeTitle')}</h3>
              <p className="mt-1 text-4xl font-extrabold text-phd-gold">{t('incomeAmount')}</p>
              <p className="text-sm text-white/70">{t('incomeNote')}</p>
              <div className="mt-6 space-y-3">
                {incomeSplit.map((r) => (
                  <div key={r.key}>
                    <div className="flex justify-between text-sm text-white/80">
                      <span>{t(INCOME_LABEL[r.key])}</span>
                      <span className="font-bold text-white">{r.pct}%</span>
                    </div>
                    <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-phd-gold" style={{width: `${r.pct}%`}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* policies */}
      <section className="bg-phd-light py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t('policiesTitle')} subtitle={t('policiesSubtitle')} />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {policies.map((p, i) => {
              const {key, Icon} = POLICY_META[p];
              return (
                <Reveal as="div" key={p} delay={(i % 3) * 70}>
                  <div className="flex items-center gap-4 rounded-2xl border border-phd-gray bg-white p-6 shadow-sm">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-phd-primary/10 text-phd-primary">
                      <Icon size={22} />
                    </span>
                    <p className="font-semibold text-phd-dark">{t(key)}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* complaints */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-phd-primary-dark to-phd-primary p-8 text-white lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-phd-gold ring-1 ring-white/20">
                  {t('complaintsTag')}
                </span>
                <h2 className="mt-4 text-3xl font-bold">{t('complaintsTitle')}</h2>
                <p className="mt-3 text-white/80">{t('complaintsBody')}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-phd-gold px-7 py-3 text-sm font-bold text-phd-dark transition-transform hover:scale-105"
                >
                  {t('report')} <ArrowRight size={16} />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {channels.map(({Icon, title, val}) => (
                  <div key={title} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                    <Icon size={22} className="text-phd-gold" />
                    <p className="mt-2 font-semibold">{title}</p>
                    <p className="text-sm text-white/70">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
