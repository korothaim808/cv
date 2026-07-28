import { LanguageProvider } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import JiraSim from "./components/JiraSim";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen text-slate-100 antialiased">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Education />
          <Projects />
          <JiraSim />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
