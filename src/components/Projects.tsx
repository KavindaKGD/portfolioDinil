import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import Section from './Section';
import { FiBarChart, FiCalendar, FiShield } from 'react-icons/fi';

const iconMap: Record<string, any> = {
  analytics: FiBarChart,
  calendar: FiCalendar,
  shield: FiShield,
};

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="My Portfolio"
      title="Selected Projects"
      description="Analytical and technology projects showcasing research, development, and problem-solving skills."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = iconMap[project.iconType] || FiBarChart;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass-card glass-card-hover group flex flex-col overflow-hidden"
            >
              <div className="relative p-8">
                {/* Icon box */}
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-purple-500/15 bg-purple-500/5 text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500/40 group-hover:bg-purple-500/10 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold leading-tight text-white group-hover:text-purple-300 transition">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400 line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
