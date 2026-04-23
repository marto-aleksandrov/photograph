const pricing = [
  { duration: '2 hours', price: '€92' },
  { duration: '3 hours', price: '€123' },
  { duration: '4 hours', price: '€153' },
  { duration: '5 hours', price: '€199', badge: 'Save 8%' },
  { duration: '6 hours', price: '€245', badge: 'Save 11%' },
  { duration: '7 hours', price: '€281', badge: 'Save 13%' },
  { duration: '8 hours', price: '€322', badge: 'Save 16%' }
];

export default function StudioPage() {
  return (
    <section className="container py-32">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">Studio Rental</p>
      <h1 className="mt-3 font-display text-4xl md:text-6xl">Book a production-ready studio in minutes.</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {pricing.map((item) => (
          <article key={item.duration} className="rounded-2xl border border-border bg-card/40 p-5">
            <p className="text-sm text-muted">{item.duration}</p>
            <p className="font-display text-3xl">{item.price}</p>
            {item.badge ? <span className="mt-2 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs text-accent">{item.badge}</span> : null}
          </article>
        ))}
      </div>
      <p className="mt-6 text-muted">Phase 2 will include full 5-step modal booking flow, availability calendar, admin management, and email automations.</p>
    </section>
  );
}
