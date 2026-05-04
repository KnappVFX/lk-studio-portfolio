import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center font-display text-3xl leading-tight md:text-5xl lg:text-6xl"
        >
          „Lukas ist seit <span className="text-gold">2014</span> in der 3D- und Videobranche.
          Sein Fokus liegt auf Business-Skalierung durch hochwertiges visuelles Storytelling."
        </motion.blockquote>

        <div className="mt-24 grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-xl border border-border"
            style={{ aspectRatio: "4 / 5" }}
          >
            <img
              src={portrait}
              alt="Lukas — 3D artist & video producer"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-foreground/75"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold">About Lukas</p>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              A decade of cinematic craft.
            </h3>
            <p>
              From early CGI experiments to full-scale commercial productions, Lukas blends
              precision 3D craft with editorial storytelling — building visuals that move
              audiences and metrics alike.
            </p>
            <p>
              Based in Germany, working worldwide with brands, agencies and studios that
              demand a premium visual standard.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
