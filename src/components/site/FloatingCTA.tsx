import { ArrowUpRight } from "lucide-react";

export function FloatingCTA() {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-widest text-background shadow-[0_10px_40px_-10px_oklch(0.86_0.17_92_/_0.7)] transition-transform hover:scale-105 md:bottom-8 md:right-8 md:px-6 md:py-4"
    >
      Get in Touch
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
    </a>
  );
}
