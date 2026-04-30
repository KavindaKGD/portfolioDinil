import { services } from '../data/portfolio';
import Section from './Section';

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="How Dinil can support a team"
      description="Practical early-career strengths shaped by business analytics studies, IT projects, and junior analyst work."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="glass-card group p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-mint/70 hover:bg-white/[0.08]"
            data-reveal
          >
            <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-xl font-extrabold text-cyan-100 transition group-hover:border-mint group-hover:bg-mint group-hover:text-navy-950">
              0{index + 1}
            </div>
            <h3 className="text-xl font-extrabold text-white">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
