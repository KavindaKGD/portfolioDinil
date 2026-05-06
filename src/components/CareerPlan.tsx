import { motion } from 'framer-motion';
import { careerPlan } from '../data/portfolio';
import Section from './Section';

export default function CareerPlan() {
  return (
    <Section
      id="career-plan"
      eyebrow="The Road Ahead"
      title="Career Development Plan"
      description="Strategic goals and milestones I've set for my professional growth in the coming years."
    >
      <div className="relative mx-auto max-w-4xl py-10">
        {/* Thicker Gradient Line */}
        <div className="absolute left-6 top-0 h-full w-1.5 rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:left-1/2 md:-ml-0.5" />

        <div className="space-y-16">
          {careerPlan.map((plan, index) => (
            <motion.div
              key={plan.goal}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row md:items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Pulsating Target Dot */}
              <div className="absolute left-6 top-1/2 z-20 h-6 w-6 -translate-x-1/2 -translate-y-1/2 md:left-1/2">
                <span className="absolute inset-0 rounded-full bg-white opacity-20 pulse-ring" />
                <div className="absolute inset-1 rounded-full border-2 border-white bg-[#030014]" />
                <div className="absolute inset-2.5 rounded-full bg-white" />
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="glass-card p-6 shadow-glow transition-transform hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black uppercase tracking-widest text-blue-400">{plan.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.goal}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{plan.milestone}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
