import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import Section from './Section';
import { FiCheckCircle } from 'react-icons/fi';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career History"
      title="Professional Experience"
      description="Hands-on analyst experience across requirement discovery, planning, dashboard development, and post-implementation evaluation."
    >
      <div className="space-y-6">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.role}-${item.company}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-card p-8"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                <p className="mt-1 text-lg font-medium text-purple-400">{item.company}</p>
              </div>
              <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-1 text-sm font-semibold text-purple-300">
                {item.period}
              </span>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-3">
                  <FiCheckCircle className="mt-1 shrink-0 text-blue-400" size={18} />
                  <span className="text-slate-400 leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
