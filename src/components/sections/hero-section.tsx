import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-background/75 to-background" />
      <div className="absolute inset-0 -z-10 bg-noise" />
      <div className="container py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">Photo · Video · Editing</p>
        <h1 className="max-w-4xl font-display text-4xl leading-tight md:text-7xl">
          Cinematic content systems that make brands impossible to ignore.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted md:text-lg">
          We combine award-level creative direction with conversion-focused production for campaigns, studios, and technical rentals.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/studio">📷 Rent Our Studio</Button>
          <Button href="/equipment" variant="ghost">🎥 Rent Equipment</Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-xs tracking-[0.2em] text-muted md:block">
        SCROLL
      </div>
    </section>
  );
}
