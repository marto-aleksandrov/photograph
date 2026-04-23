import { stats } from '@/data/site';

export function IdentityStrip() {
  return (
    <section className="border-y border-border bg-card/30 py-8">
      <div className="container grid gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="font-display text-3xl text-accent">{item.value}</p>
            <p className="text-sm text-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
