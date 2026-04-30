import { useState } from 'react';
import { skillGroups } from '../data/portfolio';
import Section from './Section';

type SkillLogo = {
  name: string;
  logo?: string;
  mark?: string;
  accent: string;
};

const skillLogos: Record<string, SkillLogo> = {
  'Power BI': {
    name: 'Power BI',
    logo: 'https://cdn.simpleicons.org/powerbi/F2C811',
    mark: 'PBI',
    accent: 'from-yellow-300/20 to-amber-500/10',
  },
  'Looker Studio': {
    name: 'Looker Studio',
    logo: 'https://cdn.simpleicons.org/looker/4285F4',
    accent: 'from-blue-400/20 to-cyan-400/10',
  },
  'Descriptive Analytics': {
    name: 'Descriptive Analytics',
    mark: 'DA',
    accent: 'from-cyan-300/20 to-mint/10',
  },
  'Dashboard Development': {
    name: 'Dashboard Development',
    mark: 'BI',
    accent: 'from-sky-300/20 to-cyan-500/10',
  },
  'Data Visualization': {
    name: 'Data Visualization',
    mark: 'DV',
    accent: 'from-emerald-300/20 to-cyan-400/10',
  },
  Python: {
    name: 'Python',
    logo: 'https://cdn.simpleicons.org/python/3776AB',
    accent: 'from-blue-400/20 to-yellow-300/10',
  },
  JavaScript: {
    name: 'JavaScript',
    logo: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    accent: 'from-yellow-300/20 to-orange-300/10',
  },
  HTML: {
    name: 'HTML',
    logo: 'https://cdn.simpleicons.org/html5/E34F26',
    accent: 'from-orange-400/20 to-red-400/10',
  },
  CSS: {
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    mark: 'CSS',
    accent: 'from-blue-400/20 to-cyan-300/10',
  },
  R: {
    name: 'R',
    logo: 'https://cdn.simpleicons.org/r/276DC3',
    accent: 'from-sky-400/20 to-blue-500/10',
  },
  SQL: {
    name: 'SQL',
    logo: 'https://cdn.simpleicons.org/mysql/4479A1',
    accent: 'from-cyan-300/20 to-blue-500/10',
  },
  'PL/SQL': {
    name: 'PL/SQL',
    logo: 'https://cdn.simpleicons.org/oracle/F80000',
    mark: 'SQL',
    accent: 'from-red-400/20 to-orange-300/10',
  },
  'Jupyter Notebook': {
    name: 'Jupyter Notebook',
    logo: 'https://cdn.simpleicons.org/jupyter/F37626',
    accent: 'from-orange-400/20 to-yellow-300/10',
  },
  RStudio: {
    name: 'RStudio',
    logo: 'https://cdn.simpleicons.org/rstudioide/75AADB',
    accent: 'from-cyan-300/20 to-blue-400/10',
  },
  Excel: {
    name: 'Excel',
    logo: 'https://cdn.simpleicons.org/microsoftexcel/217346',
    mark: 'XLS',
    accent: 'from-emerald-400/20 to-green-400/10',
  },
};

const categoryLabels: Record<string, string> = {
  'Analytics & BI': 'Analytics',
  Programming: 'Languages',
  Database: 'Databases',
  Tools: 'Tools',
};

function SkillLogoTile({ logo }: { logo: SkillLogo }) {
  const [hasImageError, setHasImageError] = useState(false);
  const mark = logo.mark ?? logo.name.slice(0, 2).toUpperCase();

  return (
    <div className={`skill-logo bg-gradient-to-br ${logo.accent}`}>
      {logo.logo && !hasImageError ? (
        <img
          src={logo.logo}
          alt={`${logo.name} logo`}
          className="h-8 w-8 object-contain sm:h-10 sm:w-10"
          loading="lazy"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <span className="text-sm font-black text-cyan-100 sm:text-base">{mark}</span>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools for analysis, visualization, and implementation"
      description="A practical stack for dashboard development, descriptive analytics, programming, databases, and research workflows."
    >
      <div className="glass-card relative overflow-hidden p-5 sm:p-8" data-reveal>
        <div className="pointer-events-none absolute inset-0 analytics-grid opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.category}>
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-cyan-300/20" />
                <h3 className="text-center text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                  {categoryLabels[group.category] ?? group.category}
                </h3>
                <span className="h-px w-10 bg-cyan-300/20" />
              </div>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
                {group.skills.map((skill, skillIndex) => {
                  const logo = skillLogos[skill] ?? {
                    name: skill,
                    mark: skill.slice(0, 2).toUpperCase(),
                    accent: 'from-cyan-300/20 to-mint/10',
                  };
                  const delay = `${(groupIndex * 5 + skillIndex) * 120}ms`;

                  return (
                    <div
                      key={skill}
                      className="floating-skill group"
                      style={{ animationDelay: delay }}
                      title={logo.name}
                    >
                      <SkillLogoTile logo={logo} />
                      <span className="mt-2 block max-w-28 text-center text-[11px] font-bold leading-4 text-slate-300 transition group-hover:text-mint sm:text-xs">
                        {logo.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
