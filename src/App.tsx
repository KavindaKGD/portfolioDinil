import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Organizations from './components/Organizations';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-navy-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <section id="resume" className="scroll-mt-24">
          <Education />
          <Experience />
          <Certifications />
          <Organizations />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
