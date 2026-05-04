import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const tags = ["3D Animation", "Commercials", "Brand Films"];

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, oklch(0.05 0 0 / 0.6) 60%, oklch(0.05 0 0) 100%)",
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <h1 className="font-display leading-[0.9] tracking-tight">
          <span className="block text-[clamp(3.5rem,12vw,12rem)]">YOUR</span>
          <span className="block italic text-gold text-[clamp(3.5rem,12vw,12rem)]">
            3D &amp; VIDEO
          </span>
          <span className="block text-[clamp(3.5rem,12vw,12rem)]">PARTNER</span>
        </h1>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-6">
          {tags.map((t) => (
            <a
              key={t}
              href="#services"
              className="rounded-full border border-border px-5 py-2 text-xs uppercase tracking-widest text-foreground/80 transition-colors hover:border-gold hover:text-gold md:text-sm"
            >
              {t}
            </a>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-6 z-10 text-xs uppercase tracking-[0.25em] text-foreground/60 md:left-10 md:text-sm">
        Germany | Worldwide
      </div>

      <motion.a
        href="#showreel"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-foreground/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  );
}
