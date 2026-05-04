import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Showreel } from "@/components/site/Showreel";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "LK Studio — 3D & Video Partner" },
      {
        name: "description",
        content:
          "LK Studio crafts cinematic 3D animation, commercials and brand films from Germany for clients worldwide.",
      },
      { property: "og:title", content: "LK Studio — 3D & Video Partner" },
      {
        property: "og:description",
        content:
          "Premium 3D animation, commercials and brand films. Cinematic visual storytelling from Germany, worldwide.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Showreel />
      <Marquee />
      <Services />
      <Work />
      <About />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
