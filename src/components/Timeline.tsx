type TimelineItem = {
  title: string;
  subtitle?: string;
  institution?: string;
  period: string;
  responsibilities?: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:bg-cyan-300/20 md:before:left-1/2">
      {items.map((item, index) => (
        <article
          key={`${item.title}-${item.period}`}
          className={`relative grid gap-4 md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>*:first-child]:col-start-2'}`}
          data-reveal
        >
          <div className={`${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
            <span className="absolute left-2 top-7 h-4 w-4 rounded-full border-4 border-navy-950 bg-mint shadow-[0_0_0_6px_rgba(25,181,138,0.12)] md:left-1/2 md:-ml-2" />
            <div className="glass-card ml-10 p-6 transition duration-300 hover:-translate-y-1 hover:border-mint/70 md:ml-0">
              <p className="mb-3 inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-sm font-semibold text-cyan-100">
                {item.period}
              </p>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              {item.subtitle ? <p className="mt-1 font-medium text-slate-300">{item.subtitle}</p> : null}
              {item.institution ? <p className="mt-3 text-slate-300">{item.institution}</p> : null}
              {item.responsibilities ? (
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
