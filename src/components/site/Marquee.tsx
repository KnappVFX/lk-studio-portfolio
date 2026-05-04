const clients = [
  "AETHER", "NORDIK", "VOLTA", "MERIDIAN", "OBSIDIAN", "LUMEN", "AXIOM", "HELIOS",
];

export function Marquee() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-border py-10 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {row.map((c, i) => (
          <span
            key={i}
            className="mx-12 font-display text-3xl tracking-[0.2em] text-foreground/40 md:text-5xl"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
