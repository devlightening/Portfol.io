import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-6">
        <Hero />
        <div className="h-px w-full bg-white/10" />
        <About />
        <div className="h-px w-full bg-white/10" />
        <Projects />
        <div className="h-px w-full bg-white/10" />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
