import { motion } from 'framer-motion';
import { contact } from '../data/portfolio';
import Section from './Section';
import { FiMail, FiPhone, FiLinkedin, FiMapPin } from 'react-icons/fi';

const contactCards = [
  { icon: FiMail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: FiPhone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: contact.linkedin, href: `https://${contact.linkedin}` },
  { icon: FiMapPin, label: 'Location', value: contact.location, href: undefined },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Connect"
      description="Open for internship, junior analyst, analytics, and technology project opportunities."
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-5 sm:grid-cols-2">
          {contactCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card glass-card-hover group p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-purple-500/20 bg-purple-500/8 text-purple-400 transition group-hover:border-purple-400/40 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">{item.label}</p>
                    {item.href ? (
                      <a
                        className="mt-1 block break-words text-base font-semibold text-white transition hover:text-purple-300"
                        href={item.href}
                        target={item.label === 'LinkedIn' ? '_blank' : undefined}
                        rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-semibold text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-10">
            <h3 className="text-2xl font-bold text-white">Have a project in mind?</h3>
            <p className="mt-3 text-slate-400">Let's discuss how I can contribute to your team or project.</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] transition hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:scale-105"
            >
              <FiMail />
              Send a Message
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
