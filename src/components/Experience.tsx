import { experience } from '../data/portfolio';
import Section from './Section';
import Timeline from './Timeline';

export default function Experience() {
  const items = experience.map((item) => ({
    title: item.role,
    subtitle: item.company,
    period: item.period,
    responsibilities: item.responsibilities,
  }));

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Turning requirements into dashboards, plans, and insight"
      description="Hands-on analyst experience across requirement discovery, planning, dashboard development, and post-implementation evaluation."
    >
      <Timeline items={items} />
    </Section>
  );
}
