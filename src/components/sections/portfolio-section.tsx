const shots = [
  'photo-1485846234645-a62644f84728',
  'photo-1492684223066-81342ee5ff30',
  'photo-1500530855697-b586d89ba3ee',
  'photo-1460353581641-37baddab0fa2',
  'photo-1438761681033-6461ffad8d80',
  'photo-1478720568477-152d9b164e26'
];

export function PortfolioSection() {
  return (
    <section id="work" className="container py-20">
      <h2 className="font-display text-3xl md:text-5xl">Selected Work</h2>
      <div className="mt-10 columns-1 gap-4 space-y-4 md:columns-3">
        {shots.map((id, index) => (
          <div key={id} className="overflow-hidden rounded-2xl border border-border bg-card/50">
            <div
              className="min-h-60 bg-cover bg-center transition duration-500 hover:scale-105"
              style={{
                backgroundImage: `url(https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80)`,
                height: index % 2 === 0 ? '300px' : '420px'
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
