import { education } from '../data/portfolio';
import Section from './Section';
import Timeline from './Timeline';

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Double-degree path across IT and business analytics"
    >
      <Timeline items={education} />
    </Section>
  );
}
