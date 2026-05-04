import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "3D ANIMATION",
    items: ["Modelling", "Texturing", "Rendering", "Visualization"],
    gradient: "linear-gradient(135deg, oklch(0.18 0.05 60), oklch(0.05 0 0))",
  },
  {
    title: "VIDEO PRODUCTION",
    items: ["Commercials", "Brand Films", "Editing"],
    gradient: "linear-gradient(135deg, oklch(0.2 0.04 30), oklch(0.05 0 0))",
  },
  {
    title: "MULTIMEDIA",
    items: ["VFX", "Motion Graphics", "Creative Direction"],
    gradient: "linear-gradient(135deg, oklch(0.16 0.06 90), oklch(0.05 0 0))",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">What we do</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">SERVICES</h2>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border p-8 transition-colors hover:border-gold/50 min-h-[380px] flex flex-col justify-between"
              style={{ background: s.gradient }}
            >
              <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-foreground/60 transition-all group-hover:text-gold group-hover:rotate-45" />
              <div />
              <div>
                <h3 className="font-display text-3xl md:text-4xl">{s.title}</h3>
                <ul className="mt-6 space-y-2 text-sm text-foreground/70">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-px w-4 bg-gold" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
