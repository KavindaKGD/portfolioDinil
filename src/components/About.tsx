import Section from './Section';

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="A student analyst building practical data and technology skills">
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative mx-auto w-full max-w-sm" data-reveal>
          <div className="absolute -inset-4 rounded-2xl bg-cyan-300/10" />
          <img
            src="/analytics-hero.png"
            alt="Analytics workspace visual"
            className="relative aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover shadow-soft"
          />
        </div>
        <div className="glass-card p-7" data-reveal>
          <p className="text-lg leading-8 text-slate-300">
            Dinil is a motivated double-degree undergraduate currently studying Information Technology at SLIIT and
            Business Analytics at SAB Campus of CA Sri Lanka. He is passionate about data science, analytical thinking,
            research, and applying technology to solve real-world problems. He is enthusiastic, adaptable,
            results-driven, and eager to continuously learn and apply new knowledge in practical business and technology
            contexts.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              ['Focus', 'Analytics & BI'],
              ['Role', 'Junior Analyst'],
              ['Base', 'Colombo, Sri Lanka'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.06] p-5 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">{label}</p>
                <p className="mt-2 font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
          <a className="btn-primary mt-7" href="/Dinil-Athuraliya-CV.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </Section>
  );
}
