'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navLinks } from '@/data/site';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled ? 'border-b border-border bg-background/70 backdrop-blur-xl' : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-6">
        <a href="#top" className="font-display text-xl tracking-widest text-foreground">
          PHOTOGRAPH
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-muted transition hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button href="/studio" variant="ghost">
            📷 Rent Our Studio
          </Button>
          <Button href="/equipment">🎥 Rent Equipment</Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-background/95 p-6 pt-24 backdrop-blur-xl">
            <div className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <a key={item.label} href={item.href} className="text-2xl font-display" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <Button href="/studio" className="w-full" variant="ghost">
                📷 Rent Our Studio
              </Button>
              <Button href="/equipment" className="w-full">
                🎥 Rent Equipment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
