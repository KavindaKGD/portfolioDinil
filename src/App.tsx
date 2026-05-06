import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Leadership from './components/Leadership';
import ParticleBackground from './components/ParticleBackground';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import ReflectiveJournal from './components/ReflectiveJournal';
import CareerPlan from './components/CareerPlan';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-primary text-slate-200">
      {/* Particle background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        
        <section id="career-journey" className="scroll-mt-24">
          <Experience />
          <Leadership />
          <Education />
          <CareerPlan />
          <Certifications />
        </section>

        <ReflectiveJournal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
