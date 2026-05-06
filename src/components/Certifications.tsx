import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import Section from './Section';
import { FiAward } from 'react-icons/fi';

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous Learning">
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="glass-card glass-card-hover flex items-start gap-4 p-6"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-400">
              <FiAward size={18} />
            </div>
            <p className="text-base font-semibold text-white">{cert}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
