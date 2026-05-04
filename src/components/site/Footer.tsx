import { Instagram, Linkedin, Youtube } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-display text-6xl tracking-wider md:text-9xl">
          LK <span className="text-gold">STUDIO</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-foreground/70">
          Let's craft something cinematic. Reach out for collaborations, briefs, or just to
          say hi.
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm uppercase tracking-widest">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-foreground/80 hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center justify-center gap-5">
          {[
            { Icon: Instagram, label: "Instagram" },
            { Icon: Linkedin, label: "LinkedIn" },
            { Icon: Youtube, label: "YouTube" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="mt-12 text-xs uppercase tracking-[0.25em] text-foreground/50">
          © 2025 LK Studio — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
