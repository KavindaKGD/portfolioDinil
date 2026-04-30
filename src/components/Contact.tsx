import { contact } from '../data/portfolio';
import Section from './Section';

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let us connect"
      description="Use the direct contact details below for internship, junior analyst, analytics, or technology project opportunities."
    >
      <div className="mx-auto max-w-4xl" data-reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Email', contact.email, `mailto:${contact.email}`],
            ['Phone', contact.phone, `tel:${contact.phone.replace(/\s/g, '')}`],
            ['LinkedIn', contact.linkedin, `https://${contact.linkedin}`],
            ['Location', contact.location, undefined],
          ].map(([label, value, href]) => (
            <div key={label} className="glass-card p-5 transition duration-300 hover:-translate-y-1 hover:border-mint/70">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">{label}</p>
              {href ? (
                <a className="mt-2 block break-words font-semibold text-white transition hover:text-mint" href={href}>
                  {value}
                </a>
              ) : (
                <p className="mt-2 font-semibold text-white">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
