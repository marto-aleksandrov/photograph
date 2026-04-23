export function AboutSection() {
  return (
    <section id="about" className="container grid gap-10 py-20 md:grid-cols-2 md:items-center">
      <div className="overflow-hidden rounded-3xl border border-border">
        <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.16em] text-accent">About Us</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl">A creative partner built for modern attention economics.</h2>
        <p className="mt-6 text-muted">
          Our team blends visual storytelling, production logistics, and post-production systems to move from concept to launch without friction.
        </p>
      </div>
    </section>
  );
}
