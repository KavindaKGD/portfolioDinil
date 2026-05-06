import { motion } from 'framer-motion';

type TimelineItem = {
  title: string;
  subtitle?: string;
  institution?: string;
  period: string;
  status?: string;
  responsibilities?: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Center line with gradient */}
      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent md:left-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.article
            key={`${item.title}-${item.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative grid gap-4 md:grid-cols-2 ${
              index % 2 !== 0 ? 'md:[&>*:first-child]:col-start-2' : ''
            }`}
          >
            <div className={index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}>
              {/* Dot on timeline */}
              <div className="absolute left-4.5 top-7 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-purple-500 bg-[#030014] shadow-glow md:left-1/2" />

              {/* Card */}
              <div className="glass-card glass-card-hover ml-10 p-6 md:ml-0 text-left">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/8 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-purple-300">
                    {item.period}
                  </span>
                  {item.status && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                      {item.status}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                {item.subtitle && <p className="text-sm font-medium text-slate-400">{item.subtitle}</p>}
                {item.institution && <p className="mt-2 text-xs font-bold text-purple-400/80 uppercase tracking-wider">{item.institution}</p>}
                
                {item.responsibilities && (
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                    {item.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-purple-500" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
