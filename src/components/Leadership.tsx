import { motion } from 'framer-motion';
import { organizations } from '../data/portfolio';
import Section from './Section';
import { FiUsers, FiBarChart2 } from 'react-icons/fi';

const iconMap: Record<string, any> = {
  analytics: FiBarChart2,
  users: FiUsers,
};

export default function Leadership() {
  return (
    <Section id="leadership" eyebrow="Beyond Academics" title="Leadership & Involvement">
      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 h-full w-px bg-purple-500/20 md:left-1/2" />

        <div className="space-y-12">
          {organizations.map((org, index) => {
            const Icon = iconMap[org.iconType] || FiUsers;
            return (
              <motion.article
                key={org.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative grid gap-4 md:grid-cols-2 ${
                  index % 2 !== 0 ? 'md:[&>*:first-child]:col-start-2' : ''
                }`}
              >
                <div className={index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}>
                  {/* Icon on timeline */}
                  <div className="absolute left-2.5 top-0 z-10 grid h-7 w-7 place-items-center rounded-full border border-purple-500/40 bg-[#030014] text-purple-400 shadow-glow md:left-1/2 md:-ml-3.5">
                    <Icon size={12} />
                  </div>

                  <div className="glass-card glass-card-hover ml-10 p-6 md:ml-0">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">{org.period}</span>
                    <h3 className="mt-3 text-lg font-bold text-white">{org.name}</h3>
                    <p className="mt-2 text-sm text-slate-400 font-medium">{org.role}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
