'use client';

import {useEffect, useState} from 'react';
import {ArrowUp, Mail} from 'lucide-react';

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="mailto:kalam@phd-bd.com"
        aria-label="Email PHD"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-phd-accent text-white shadow-lg transition-transform hover:scale-105"
      >
        <Mail size={20} />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          aria-label="Back to top"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-phd-primary text-white shadow-lg transition-transform hover:scale-105"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
