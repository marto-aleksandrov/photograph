import { Button } from '@/components/ui/button';

export function FinalCtaSection() {
  return (
    <section className="border-y border-border bg-card/40 py-20">
      <div className="container text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Limited studio slots this month</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl md:text-6xl">Ready to turn your next campaign into a conversion engine?</h2>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/studio">📷 Rent Our Studio</Button>
          <Button href="/equipment" variant="ghost">🎥 Rent Equipment</Button>
        </div>
      </div>
    </section>
  );
}
