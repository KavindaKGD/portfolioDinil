import { motion } from 'framer-motion';
import { services } from '../data/portfolio';
import Section from './Section';

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="How I Can Help"
      description="Practical early-career strengths shaped by business analytics studies, IT projects, and junior analyst work."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="glass-card glass-card-hover group p-8 text-center"
          >
            {/* Icon circle */}
            <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full border border-purple-500/20 bg-purple-500/8 text-2xl transition group-hover:border-purple-400/40 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition">
              {service.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
