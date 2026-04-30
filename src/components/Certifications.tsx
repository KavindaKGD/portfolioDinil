import { certifications } from '../data/portfolio';
import Section from './Section';

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous learning in data science fundamentals">
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((certification) => (
          <div key={certification} className="glass-card p-6" data-reveal>
            <p className="text-lg font-semibold text-white">{certification}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
