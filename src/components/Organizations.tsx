import { organizations } from '../data/portfolio';
import Section from './Section';

export default function Organizations() {
  return (
    <Section id="organizations" eyebrow="Organizations" title="Professional communities and leadership">
      <div className="grid gap-5 md:grid-cols-2">
        {organizations.map((organization) => (
          <article key={organization.name} className="glass-card p-6" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">{organization.period}</p>
            <h3 className="mt-3 text-xl font-bold text-white">{organization.name}</h3>
            <p className="mt-2 text-slate-300">{organization.role}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
