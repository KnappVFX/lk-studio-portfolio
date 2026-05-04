import { motion } from "framer-motion";
import { Play } from "lucide-react";
import showreel from "@/assets/showreel.jpg";

export function Showreel() {
  return (
    <section id="showreel" className="px-6 py-24 md:px-10 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Showreel 2025</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">FEATURED WORK</h2>
          </div>
        </div>

        <button
          className="group relative block w-full overflow-hidden rounded-xl border border-border"
          style={{ aspectRatio: "16 / 9" }}
        >
          <img
            src={showreel}
            alt="Showreel preview"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/40 transition-colors group-hover:bg-background/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold text-background transition-transform group-hover:scale-110 md:h-28 md:w-28">
              <Play className="ml-1 h-8 w-8 fill-current md:h-10 md:w-10" />
            </span>
          </div>
        </button>
      </motion.div>
    </section>
  );
}
