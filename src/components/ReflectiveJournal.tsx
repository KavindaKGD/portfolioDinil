import { motion } from 'framer-motion';
import { reflectiveJournal } from '../data/portfolio';
import Section from './Section';
import { FiBookOpen } from 'react-icons/fi';

export default function ReflectiveJournal() {
  return (
    <Section
      id="journal"
      eyebrow="Growth & Insights"
      title="Reflective Journal"
      description="A collection of thoughts and key takeaways from my academic and professional journey."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {reflectiveJournal.map((entry, index) => (
          <motion.article
            key={entry.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-card glass-card-hover group flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg border border-purple-500/15 bg-purple-500/5 text-purple-400 group-hover:text-white transition-colors">
                <FiBookOpen size={18} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400/70">{entry.date}</span>
            </div>
            
            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
              {entry.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              {entry.excerpt}
            </p>
            
            <div className="mt-6">
              <span className="inline-block rounded-md bg-purple-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-tighter text-purple-300">
                {entry.category}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
