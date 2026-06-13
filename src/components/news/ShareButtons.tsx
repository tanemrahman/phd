'use client';

import {useEffect, useState} from 'react';
import {Link2, Check} from 'lucide-react';
import {Facebook, Twitter, Linkedin} from '@/components/shared/BrandIcons';

export default function ShareButtons({label}: {label: string}) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => setUrl(window.location.href), []);

  const enc = encodeURIComponent(url);
  const links = [
    {label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${enc}`, Icon: Facebook},
    {label: 'Twitter', href: `https://twitter.com/intent/tweet?url=${enc}`, Icon: Twitter},
    {label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc}`, Icon: Linkedin},
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-phd-dark">{label}:</span>
      {links.map(({label, href, Icon}) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${label}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-phd-light text-phd-primary transition-colors hover:bg-phd-primary hover:text-white"
        >
          <Icon size={15} />
        </a>
      ))}
      <button
        onClick={copy}
        aria-label="Copy link"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-phd-light text-phd-primary transition-colors hover:bg-phd-primary hover:text-white"
      >
        {copied ? <Check size={15} /> : <Link2 size={15} />}
      </button>
    </div>
  );
}
