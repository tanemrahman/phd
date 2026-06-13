'use client';

import {useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Search, ChevronDown, X} from 'lucide-react';
import {
  projects,
  donors,
  sectors,
  divisions,
  fmtUsd,
  type ProjectStatus,
} from '@/lib/projects';

const statuses: ProjectStatus[] = ['Ongoing', 'Completed', 'Pipeline'];

type Filters = {q: string; donor: string; sector: string; division: string; status: string};
const empty: Filters = {q: '', donor: '', sector: '', division: '', status: ''};

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full appearance-none rounded-xl border bg-white px-4 py-2.5 pr-9 text-sm font-medium transition-colors focus:border-phd-primary focus:outline-none ${
          value ? 'border-phd-primary text-phd-primary' : 'border-phd-gray text-phd-dark'
        }`}
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-phd-muted" />
    </label>
  );
}

const statusTone: Record<ProjectStatus, string> = {
  Ongoing: 'bg-phd-accent/15 text-phd-accent-dark',
  Completed: 'bg-phd-gray text-phd-muted',
  Pipeline: 'bg-phd-gold/20 text-phd-gold',
};

export default function ProjectsExplorer() {
  const t = useTranslations('projects');
  const [f, setF] = useState<Filters>(empty);
  const set = (k: keyof Filters, v: string) => setF((p) => ({...p, [k]: v}));

  const statusLabel: Record<string, string> = {
    Ongoing: t('statusOngoing'),
    Completed: t('statusCompleted'),
    Pipeline: t('statusPipeline'),
  };

  const results = useMemo(() => {
    const q = f.q.trim().toLowerCase();
    return projects.filter((p) => {
      if (q && !`${p.title} ${p.summary} ${p.districts.join(' ')} ${p.id}`.toLowerCase().includes(q))
        return false;
      if (f.donor && p.donor !== f.donor) return false;
      if (f.sector && p.sector !== f.sector) return false;
      if (f.division && p.division !== f.division) return false;
      if (f.status && p.status !== f.status) return false;
      return true;
    });
  }, [f]);

  const totalBudget = results.reduce((s, p) => s + p.budgetUsd, 0);
  const totalBen = results.reduce((s, p) => s + p.beneficiaries, 0);
  const active = Object.entries(f).filter(([k, v]) => v && k !== 'q');

  return (
    <div>
      {/* Controls */}
      <div className="rounded-3xl border border-phd-gray bg-white p-5 shadow-sm lg:p-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-phd-muted" />
          <input
            type="search"
            value={f.q}
            onChange={(e) => set('q', e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="w-full rounded-2xl border border-phd-gray bg-phd-light py-3.5 pl-12 pr-4 text-phd-dark placeholder:text-phd-muted/70 focus:border-phd-primary focus:outline-none"
          />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <FilterSelect label={t('allDonors')} value={f.donor} options={donors} onChange={(v) => set('donor', v)} />
          <FilterSelect label={t('allSectors')} value={f.sector} options={sectors} onChange={(v) => set('sector', v)} />
          <FilterSelect label={t('allDivisions')} value={f.division} options={divisions} onChange={(v) => set('division', v)} />
          <FilterSelect label={t('anyStatus')} value={f.status} options={statuses} onChange={(v) => set('status', v)} />
        </div>
      </div>

      {/* Summary bar */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-phd-dark">
            {results.length} {results.length === 1 ? t('project') : t('projects')}
          </span>
          {active.length > 0 && (
            <>
              <span className="text-phd-muted">·</span>
              {active.map(([k, v]) => (
                <button
                  key={k}
                  onClick={() => set(k as keyof Filters, '')}
                  className="inline-flex items-center gap-1 rounded-full bg-phd-primary/10 px-3 py-1 text-xs font-semibold text-phd-primary hover:bg-phd-primary/20"
                >
                  {k === 'status' ? statusLabel[v] : v}
                  <X className="h-3 w-3" />
                </button>
              ))}
              <button onClick={() => setF(empty)} className="text-xs font-semibold text-phd-gold hover:underline">
                {t('clearAll')}
              </button>
            </>
          )}
        </div>
        <div className="flex gap-5 text-sm text-phd-muted">
          <span>
            <b className="text-phd-primary">{fmtUsd(totalBudget)}</b> {t('portfolio')}
          </span>
          <span>
            <b className="text-phd-primary">{(totalBen / 1_000_000).toFixed(2)}M</b> {t('people')}
          </span>
        </div>
      </div>

      {/* Results */}
      {results.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-phd-gray bg-phd-light p-12 text-center">
          <Search className="mx-auto h-8 w-8 text-phd-muted" />
          <p className="mt-3 text-lg font-bold text-phd-dark">{t('noResults')}</p>
          <p className="mt-1 text-sm text-phd-muted">{t('noResultsHint')}</p>
          <button
            onClick={() => setF(empty)}
            className="mt-4 rounded-full bg-phd-primary px-5 py-2 text-sm font-semibold text-white hover:bg-phd-primary-dark"
          >
            {t('reset')}
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {results.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col rounded-2xl border border-phd-gray bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusTone[p.status]}`}>
                  {statusLabel[p.status]}
                </span>
                <span className="font-mono text-xs text-phd-muted">{p.id}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold leading-tight text-phd-dark">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-phd-muted">{p.summary}</p>

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-phd-gray pt-4 text-xs">
                <div>
                  <dt className="text-phd-muted">{t('donor')}</dt>
                  <dd className="font-semibold text-phd-primary">{p.donor}</dd>
                </div>
                <div>
                  <dt className="text-phd-muted">{t('sector')}</dt>
                  <dd className="font-semibold text-phd-dark">{p.sector}</dd>
                </div>
                <div>
                  <dt className="text-phd-muted">{t('location')}</dt>
                  <dd className="font-semibold text-phd-dark">{p.division}</dd>
                </div>
                <div>
                  <dt className="text-phd-muted">{t('timeline')}</dt>
                  <dd className="font-semibold text-phd-dark">
                    {p.startYear}–{p.endYear}
                  </dd>
                </div>
              </dl>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-phd-light px-4 py-3">
                <div>
                  <p className="text-base font-bold text-phd-primary">{fmtUsd(p.budgetUsd)}</p>
                  <p className="text-[0.7rem] text-phd-muted">{t('budget')}</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-bold text-phd-primary">{(p.beneficiaries / 1000).toFixed(0)}K</p>
                  <p className="text-[0.7rem] text-phd-muted">{t('beneficiaries')}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
