import { projects } from '../data/portfolio';
import Section from './Section';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected analytics and technology work"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="glass-card group flex min-h-[390px] flex-col p-6 transition duration-300 hover:-translate-y-2 hover:border-mint/70 hover:bg-white/[0.08]"
            data-reveal
          >
            <div className="analytics-grid mb-6 flex h-32 items-end rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(25,181,138,0.18))] p-5 text-white">
              <span className="text-4xl font-extrabold opacity-95">0{index + 1}</span>
            </div>
            <h3 className="text-xl font-bold leading-7 text-white">{project.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
