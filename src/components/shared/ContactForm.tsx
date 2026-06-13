'use client';

import {useState, type FormEvent} from 'react';
import {useTranslations} from 'next-intl';
import {Send, CheckCircle2} from 'lucide-react';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to backend / email service (e.g. /api/contact) before launch.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-phd-accent/30 bg-phd-accent/10 p-10 text-center">
        <CheckCircle2 size={40} className="text-phd-accent" />
        <p className="mt-4 text-lg font-semibold text-phd-dark">{t('formSuccess')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label={t('formName')} />
        <Field name="email" label={t('formEmail')} type="email" />
      </div>
      <Field name="subject" label={t('formSubject')} />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-phd-dark">
          {t('formMessage')}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-phd-gray bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-phd-primary focus:ring-2 focus:ring-phd-primary/20"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-phd-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-phd-primary-dark"
      >
        {t('formSubmit')}
        <Send size={16} />
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = 'text',
}: {
  name: string;
  label: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-phd-dark">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full rounded-xl border border-phd-gray bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-phd-primary focus:ring-2 focus:ring-phd-primary/20"
      />
    </div>
  );
}
