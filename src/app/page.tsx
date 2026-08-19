import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TerminalIntro from "@/components/TerminalIntro";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { I18nProvider } from "@/lib/site";

export default function Home() {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <TerminalIntro />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </I18nProvider>
  );
}
