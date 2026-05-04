import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

const projects = [
  { title: "Automotive 3D", category: "3D Animation", img: w1 },
  { title: "Product Commercial", category: "Video", img: w2 },
  { title: "Brand Film", category: "Video", img: w3 },
  { title: "Architecture Viz", category: "3D Animation", img: w4 },
  { title: "Motion Graphics", category: "Multimedia", img: w5 },
  { title: "3D Character", category: "3D Animation", img: w6 },
];

export function Work() {
  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Selected projects</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">WORK</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative block overflow-hidden rounded-xl"
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-4 top-4 z-10 rounded-full border border-white/30 bg-background/40 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur">
                {p.category}
              </div>
              <ArrowUpRight className="absolute right-4 top-4 z-10 h-5 w-5 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45" />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
