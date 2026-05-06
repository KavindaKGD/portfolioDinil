import { motion } from 'framer-motion';
import { aboutStats } from '../data/portfolio';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="A student analyst building practical data and technology skills">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-purple-600/15 to-pink-500/10 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/15 p-1">
            <img
              src="/analytics-hero.png"
              alt="Analytics workspace visual"
              className="relative aspect-[4/5] w-full rounded-xl object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-8">
            <p className="text-lg leading-8 text-slate-300">
              Dinil is a motivated double-degree undergraduate currently studying Information Technology at SLIIT and
              Business Analytics at SAB Campus of CA Sri Lanka. He is passionate about data science, analytical thinking,
              research, and applying technology to solve real-world problems. He is enthusiastic, adaptable,
              results-driven, and eager to continuously learn and apply new knowledge in practical business and technology
              contexts.
            </p>

            {/* Stats grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="group rounded-xl border border-purple-500/10 bg-purple-500/5 p-5 text-center transition hover:border-purple-500/25 hover:bg-purple-500/10"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">{stat.label}</p>
                  <p className="mt-2 text-lg font-bold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Download CV */}
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(139,92,246,0.25)] transition hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:scale-105"
              href="/Dinil-Athuraliya-CV.pdf"
              download
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
