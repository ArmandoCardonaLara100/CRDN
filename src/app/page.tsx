import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionShell } from "@/components/layout/MotionShell";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Insights } from "@/components/sections/Insights";
import { Projects } from "@/components/sections/Projects";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <MotionShell>
      <Header />
      <main id="content">
        <Hero />
        <About />
        <Insights />
        <Projects />
        <Gallery />
        <Process />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </MotionShell>
  );
}
