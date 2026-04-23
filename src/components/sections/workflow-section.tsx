export function WorkflowSection() {
  return (
    <section className="container py-20">
      <h2 className="font-display text-3xl md:text-5xl">How It Works</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card/50 p-6">
          <h3 className="font-display text-2xl">Studio Booking Flow</h3>
          <ol className="mt-4 space-y-3 text-sm text-muted">
            <li>1. Select duration package</li>
            <li>2. Choose date and start time</li>
            <li>3. Submit booking inquiry</li>
            <li>4. Receive confirmation by email</li>
          </ol>
        </article>
        <article className="rounded-2xl border border-border bg-card/50 p-6">
          <h3 className="font-display text-2xl">Equipment Rental Flow</h3>
          <ol className="mt-4 space-y-3 text-sm text-muted">
            <li>1. Filter and select equipment</li>
            <li>2. Set rental date + times</li>
            <li>3. Submit cart reservation</li>
            <li>4. Finalize details with our team offline</li>
          </ol>
        </article>
      </div>
    </section>
  );
}
