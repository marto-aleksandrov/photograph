'use client';

import { useState } from 'react';
import { faqs } from '@/data/site';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="container py-20">
      <h2 className="font-display text-3xl md:text-5xl">FAQs</h2>
      <div className="mt-8 space-y-3">
        {faqs.map((item, index) => {
          const open = index === openIndex;
          return (
            <article key={item.question} className="rounded-2xl border border-border bg-card/40 p-5">
              <button className="flex w-full items-center justify-between text-left" onClick={() => setOpenIndex(open ? -1 : index)}>
                <span className="font-semibold">{item.question}</span>
                <span className="text-accent">{open ? '−' : '+'}</span>
              </button>
              {open && <p className="mt-3 text-sm text-muted">{item.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
