const testimonials = [
  { name: 'Aria M.', project: 'Fashion Campaign', quote: 'Flawless production quality and communication from pre-pro to final edits.' },
  { name: 'Noah T.', project: 'Product Launch Reel', quote: 'Our campaign CTR increased immediately after launch of their assets.' },
  { name: 'Dina K.', project: 'Studio Session', quote: 'The studio setup was clean, fast, and exactly what our crew needed.' }
];

export function TestimonialsSection() {
  return (
    <section className="container py-20">
      <h2 className="font-display text-3xl md:text-5xl">Social Proof</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-2xl border border-border bg-card/50 p-6">
            <p className="text-accent">★★★★★</p>
            <p className="mt-4 text-sm text-muted">“{item.quote}”</p>
            <p className="mt-5 text-sm font-semibold">{item.name}</p>
            <p className="text-xs text-muted">{item.project}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
