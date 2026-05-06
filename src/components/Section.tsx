import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 px-6 py-24 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
          )}
          <div className="glow-line mx-auto mt-6 w-24" />
        </motion.div>

        {children}
      </div>
    </section>
  );
}
