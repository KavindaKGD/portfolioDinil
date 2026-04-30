import type { ReactNode } from 'react';

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
    <section id={id} className={`relative scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center" data-reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-mint">{eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
