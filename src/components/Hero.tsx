import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  useScrollReveal();

  return (
    <section
      id="home"
      className="analytics-grid relative overflow-hidden bg-navy-950 px-5 pb-20 pt-32 text-white sm:px-6 lg:px-8 lg:min-h-screen lg:pb-24 lg:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.2),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(25,181,138,0.2),transparent_30%),linear-gradient(180deg,rgba(7,20,38,0.78),#071426_88%)]" />
      <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10" data-reveal>
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
            Hi, I am
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Dinil Athuraliya
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-bold text-cyan-100 sm:text-2xl">
            IT & Business Analytics Undergraduate | Junior Analyst | Data Enthusiast
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Motivated double-degree undergraduate pursuing BSc (Hons) in Information Technology and BMBA (Hons) in
            Business Analytics, passionate about data science, data-driven decision-making, dashboards, and
            technology-driven problem solving.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-mint">Colombo, Sri Lanka</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn-secondary" href="#contact">
              Contact Me
            </a>
            <a className="btn-ghost" href="/Dinil-Athuraliya-CV.pdf" download>
              Download CV
            </a>
          </div>
        </div>

        <div className="relative z-10" data-reveal>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] bg-[linear-gradient(135deg,rgba(56,189,248,0.25),rgba(25,181,138,0.22))] blur-sm" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-glow backdrop-blur">
              <img
                src="/analytics-hero.png"
                alt="Abstract business analytics dashboard visual"
                className="aspect-[4/5] w-full object-cover opacity-95"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 grid w-[92%] -translate-x-1/2 grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-navy-900/85 p-4 shadow-soft backdrop-blur">
              {[
                ['BI', 'Dashboards'],
                ['SQL', 'Data'],
                ['R&D', 'Insight'],
              ].map(([metric, label]) => (
                <div key={metric} className="text-center">
                  <p className="text-lg font-bold text-white">{metric}</p>
                  <p className="text-xs font-medium text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
