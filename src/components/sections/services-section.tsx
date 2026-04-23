import { services } from '@/data/site';
import { Button } from '@/components/ui/button';

export function ServicesSection() {
  return (
    <section id="services" className="container py-20">
      <h2 className="font-display text-3xl md:text-5xl">Services Built for Growth</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="group rounded-2xl border border-border bg-card/40 p-6 transition hover:-translate-y-1 hover:border-accent/50">
            <h3 className="font-display text-2xl">{service.title}</h3>
            <p className="mt-4 min-h-20 text-sm text-muted">{service.description}</p>
            <Button href={service.href} variant="ghost" className="mt-6">Learn More</Button>
          </article>
        ))}
      </div>
    </section>
  );
}
